import CoreRoutes from './core.routes.js'
import AuthService from './auth.service.js'
import AuthController from './auth.controller.js'
import AuthInterceptor from './auth.interceptor.js'

export default function core(angular, ...args) {

  return angular
    .module('app.core', args)
    .config(CoreRoutes)
    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push(AuthInterceptor.authInterceptorFactory);
    }])
    .controller('AuthController', AuthController)
    .factory('AuthService', AuthService.authServiceFactory)
    .name;

};
