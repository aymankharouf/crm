import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import axios from 'axios'

axios.defaults.baseURL = window.location.hostname === 'localhost' ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PROD_URL
axios.defaults.withCredentials = true

function App() {
  console.log('url = ', process.env.REACT_APP_PROD_URL)
  console.log('location = ', window.location.hostname)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}



export default App;
