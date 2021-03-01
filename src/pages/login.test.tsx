import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router, MemoryRouter } from 'react-router-dom'
import Login from './login'
import "@testing-library/jest-dom/extend-expect";

test('when rendering login page the button should be disabled', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Login />
    </Router>
  )
  expect(screen.getByTestId('button')).toBeDisabled()
});

// test('after entering a value in email & password the button should be enabled', () => {
//   const history = createMemoryHistory()
//   render(
//     <Router history={history}>
//       <Login />
//     </Router>
//   )
//   const email = screen.getByTestId('email').querySelector('input')
//   const password = screen.getByTestId('password').querySelector('input')
//   fireEvent.change(email!, {target: {value: 'aw'}})
//   fireEvent.change(password!, {target: {value: '123'}})
//   expect(screen.getByTestId('button')).toBeEnabled()
// });

// test('after entering a short value in email an error popup', async () => {
//   render(
//     <MemoryRouter>
//       <Login />
//     </MemoryRouter>
//   )
//   const email = screen.getByTestId('email').querySelector('input')
//   const password = screen.getByTestId('password').querySelector('input')
//   const button = screen.getByTestId('button')
//   fireEvent.change(email!, {target: {value: 'aw@tt.com'}})
//   fireEvent.change(password!, {target: {value: '123'}})
//   fireEvent.click(button)
//   // await screen.debug({ timeout: 3000 })
//   // expect(await screen.findByText("email is not registered", {}, { timeout: 3000 })).toBeInTheDocument();
//   await waitFor(() => {
//     expect(screen.findByText('email is not registered')).toBeInTheDocument()
//   }, { timeout: 3000 })
// });


