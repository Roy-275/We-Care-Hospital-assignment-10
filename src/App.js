import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Consultants from './Components/Consultants/Consultants';
import Register from './Components/Register/Register'
import Home from './Components/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Components/Login/Login';
import NotFound from './Components/Not Found/NotFound';
import Technology from './Components/Technology/Technology';
import Details from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/consultants">
              <Consultants></Consultants>
            </PrivateRoute>
            <PrivateRoute path="/technology">
              <Technology></Technology>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services/:serviceKey">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
