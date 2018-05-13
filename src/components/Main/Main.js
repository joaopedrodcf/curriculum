import { Route, Switch } from 'react-router-dom';
import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contactme" component={ContactMe} />
  </Switch>
);

export default Main;
