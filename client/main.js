import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// add render routes function
import { renderRoutes } from '../imports/startup/client/routes';

// pass an anonymous function that will execute as soon as the DOM is ready
Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('target'));
});