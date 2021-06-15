
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Home from '../Home/Home'

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
