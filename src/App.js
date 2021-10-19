import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Consultants from './Components/Consultants/Consultants';
import Register from './Components/Consultants/Register/Register';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/Not Found/NotFound';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/consultants">
            <Consultants></Consultants>
          </Route>
          <Route path="/technology">
            <Technology></Technology>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
