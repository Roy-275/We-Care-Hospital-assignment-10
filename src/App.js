import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Consultants from './Components/Consultants/Consultants';
import Home from './Components/Home/Home';
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
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
