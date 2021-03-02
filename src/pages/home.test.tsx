import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import Home from './home'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('http://localhost:5000/api/auth', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('login testing', async () => {
  server.use(
    rest.post('http://localhost:5000/api/auth/login', (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({errors: {email: 'email is not registered'}})
      )
    })
  )
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  const email = screen.getByRole('email')
  const password = screen.getByRole('password')
  const button = screen.getByRole('button')
  userEvent.type(email, 'aw@tt.com')
  userEvent.type(password, '123')
  expect(button).toBeEnabled()
  userEvent.click(button)
  expect(await screen.findByText('Error')).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.findByText('Error')).toBeInTheDocument()
  // }, { timeout: 3000 })
});


