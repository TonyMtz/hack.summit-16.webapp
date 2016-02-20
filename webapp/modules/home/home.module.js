import routes from './home.routes.js';
import HomeController from './home.controller.js';

export default function home(angular, ...args) {

  return angular.module('app.home', args)
    .config(routes)
    .controller('HomeController', HomeController)
    .name;

};
