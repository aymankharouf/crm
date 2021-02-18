import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import MyAppBar from './components/my-app-bar'
import axios from 'axios'
import Store from './data/store'

axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : '/api'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <Store>
      <BrowserRouter>
        <MyAppBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </Store>
  );
}



export default App;
