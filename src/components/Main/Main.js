import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';

const Main = () => (
  <Switch>
    <Route exact path="/curriculum" component={AboutMe} />
    <Route exact path="/curriculum/skills" component={Skills} />
    <Route exact path="/curriculum/contactme" component={ContactMe} />
  </Switch>
);

export default Main;
