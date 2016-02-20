import routes from './dashboard.routes.js';
import DashboardController from './dashboard.controller.js';
import CardService from './cards.service.js';

export default function dashboard(angular, ...args) {

  return angular.module('app.dashboard', args)
    .config(routes)
    .controller('DashboardController', DashboardController)
    .factory('CardService', CardService.cardServiceFactory)
    .name;

};
