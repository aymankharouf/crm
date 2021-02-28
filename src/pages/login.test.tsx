import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Login from './login'

afterEach(cleanup)
test('renders login page ', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Login />
    </Router>
  )
  expect(screen.getByTestId('button')).toBeEnabled()
});


