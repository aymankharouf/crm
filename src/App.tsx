import './App.css';
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyAppBar from './components/my-app-bar'
import axios from 'axios'
import Store from './data/store'

const Register = lazy(() => import('./pages/register'));
const Login = lazy(() => import('./pages/login'));
const NotFound = lazy(() => import('./pages/not-found'));
const Home = lazy(() => import('./pages/home'));

axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://first-express-orm.herokuapp.com/api'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Store>
        <BrowserRouter>
          <MyAppBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Store>
    </Suspense>
  );
}



export default App;
