import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import NotFound from "./components/notfound/NotFound"
import Jeopardy from "./components/jeopardy/Jeopardy"
import Clock from './components/clock/Clock';
import Contact from './components/contacts/Contact';
// import Navigation from './components/navigation'

function App() {
  return (
    <Switch>
      <Route exact
        path='/clock'
        render={(props) => <Clock />}
      />
      <Route exact
        path="/contact"
        render={(props) => <Contact />}
      />
      <Route exact
        path="/jeopardy/"
        render={(props) => <Jeopardy />}
      />

      <Route exact
        path="/welcome/:name"
        render={(props) => <Welcome name={props.match.params.name} />}
      />
      <Route
        exact
        path="/"
        render={(props) => <Welcome name="Davey" />}
      />
      <Route exact
        path="*"
        component={NotFound}
      />
    </Switch>
  );
}

export default App;
