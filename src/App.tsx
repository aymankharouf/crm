import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/not-found';
import MyAppBar from './components/my-app-bar'
import axios from 'axios'
import Store from './data/store'

axios.defaults.baseURL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api' : 'https://first-express-orm.herokuapp.com/api'

const App = () => {
  return (
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
  );
}



export default App;
