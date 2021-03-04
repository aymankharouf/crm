import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Login from './login'
import userEvent from '@testing-library/user-event';
import { rest } from 'msw'
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get('http://localhost:5000/api/auth', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('when rendering login page the button should be disabled', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  expect(screen.getByTestId('button')).toBeDisabled()
});

test('after entering a value in email & password the button should be enabled', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  const email = screen.getByTestId('email').querySelector('input')
  const password = screen.getByTestId('password').querySelector('input')
  fireEvent.change(email!, {target: {value: 'aw'}})
  fireEvent.change(password!, {target: {value: '123'}})
  expect(screen.getByTestId('button')).toBeEnabled()
});

test('after entering a short value in email an error popup', async () => {
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
      <Login />
    </MemoryRouter>
  )
  const email = screen.getByTestId('email').querySelector('input')!
  const password = screen.getByTestId('password').querySelector('input')!
  const button = screen.getByTestId('button')
  userEvent.type(email, 'aw@tt.com')
  userEvent.type(password, '123')
  expect(button).toBeEnabled()
  userEvent.click(button)
  expect(await screen.findByText('email is not registered')).toBeInTheDocument();
});



