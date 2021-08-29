import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleCountry from './components/SingleCountry/SingleCountry';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/country/:name">
          <SingleCountry></SingleCountry>
        </Route>


        <Route exact path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
