import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound from './components/NotFound/NotFound';

function App() {

  const basicStyle =  {  
    fontFamily: 'Montserrat,sans-serif',
    background:'#1F2833'
  }
 
  return (    
    <div style={basicStyle}>  
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
