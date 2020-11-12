import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <Router>
      
      <h2>ROUTER example!</h2>
      <div>
        <Link to="/help">Help</Link> | <Link to="/about">About</Link>
      </div>

      <Switch>
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
      </Switch>

    </Router>
  )
}



// Help component.
function Help() {
  return (
    <h4>
      This is help page.
    </h4>
  )
}
// About component.
function About() {
  return (
    <h4>
      This is about page.
    </h4>
  )
}


export default Navigation;