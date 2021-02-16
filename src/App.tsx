import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import axios from 'axios'

axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://first-express-orm.herokuapp.com/api'
axios.defaults.withCredentials = true

function App() {
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
