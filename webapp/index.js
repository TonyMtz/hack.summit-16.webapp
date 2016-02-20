/*
 * The `webapp` module
 * ===================
 *
 * This module provides the initialization routine.
 */

// Required: import the Babel runtime module.
import 'babel-polyfill';

// Dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Import modules
import * as modules from './modules/loader';

export function init() {

  let modulesLoaded = Object.keys(modules).map((key) => {
    return modules[key](angular, uiRouter);
  });

  angular.module('app', [uiRouter].concat(modulesLoaded));

}
