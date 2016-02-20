const HTTP = new WeakMap();
const CONFIG = new WeakMap();

export default class LoginService {
  constructor($http, AppConfig) {
    HTTP.set(this, $http);
    CONFIG.set(this, AppConfig);
  }

  loginWL() {
    return HTTP.get(this).get(CONFIG.get(this).host + '/wunderlist/auth').then(result => result.data);
  }

  static loginServiceFactory($http, AppConfig) {
    return new LoginService($http, AppConfig);
  }
}

LoginService.loginServiceFactory.$inject = ['$http', 'AppConfig'];
