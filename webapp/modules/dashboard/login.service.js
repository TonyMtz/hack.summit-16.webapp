const HTTP = new WeakMap();
const CONFIG = new WeakMap();
const AUTHSERVICE = new WeakMap();

export default class LoginService {
  constructor($http, AppConfig, AuthService) {
    HTTP.set(this, $http);
    CONFIG.set(this, AppConfig);
    AUTHSERVICE.set(this, AuthService);
  }

  loginWL() {
    return HTTP.get(this).get(CONFIG.get(this).host + '/wunderlist/auth').then(result => result.data);
  }

  trello() {
    return AUTHSERVICE.get(this).login('trello').then(result => result);
  }

  static loginServiceFactory($http, AppConfig, AuthService) {
    return new LoginService($http, AppConfig, AuthService);
  }
}

LoginService.loginServiceFactory.$inject = ['$http', 'AppConfig', 'AuthService'];
