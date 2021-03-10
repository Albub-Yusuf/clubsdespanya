import logo from './logo.svg';
import './App.css';
// or less ideally
import { Button } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';

//style={{backgroundColor:'#3AAFA9'}}

function App() {
  return (

    
    <div style={{fontFamily: 'Montserrat,sans-serif',background:'#1F2833'}}>  
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/teams/:id">
              <TeamDetails />
            </Route>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
