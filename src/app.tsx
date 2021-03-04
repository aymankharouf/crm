import { createContext, useReducer, useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import MyAppBar from './components/my-app-bar'
import axios from 'axios'
import Reducer from './data/reducer'
import { iContext } from './data/interfaces'
import { getToken } from './data/actions'
import './app.css';

const Register = lazy(() => import('./pages/register'));
const Login = lazy(() => import('./pages/login'));
const NotFound = lazy(() => import('./pages/not-found'));
const Home = lazy(() => import('./pages/home'));

axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://first-express-orm.herokuapp.com/api'
export const AppContext = createContext({} as iContext)
const queryClient = new QueryClient()

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {})
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = getToken()
        if (token) {
          axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
          const response = await axios.get('/auth/getUser')
          if (response.data) dispatch({type: 'LOGIN', payload: response.data})
        }
      } catch (err) {
        localStorage.removeItem('token')
      }
    }
    getUser()
  }, [])
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContext.Provider value={{state, dispatch}}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <MyAppBar />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/register" component={Register}/>
              <Route path="/login" component={Login}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </BrowserRouter>
        </QueryClientProvider>
      </AppContext.Provider>
    </Suspense>
  );
}


export default App;
