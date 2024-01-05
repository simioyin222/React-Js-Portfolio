import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/interests" component={Interests} />
        {/* add routes  */}
      </Switch>
    </Router>
  );
}

export default App;
