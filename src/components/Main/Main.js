import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Projects from './Projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/skills" component={Skills} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contactme" component={ContactMe} />
  </Switch>
);

export default Main;
