import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default App;
