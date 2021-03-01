import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import Home from './home'

jest.useFakeTimers();
test('login testing', async () => {
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
  expect(await screen.findByText("email is not registered", {}, { timeout: 3000 })).toBeInTheDocument();
  // await waitFor(() => {
  //   expect(screen.findByText('Error')).toBeInTheDocument()
  // }, { timeout: 3000 })
});


