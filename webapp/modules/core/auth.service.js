const HTTP = new WeakMap();
const COOKIES = new WeakMap();
const CONFIG = new WeakMap();

export default class AuthService {
  constructor($http, $cookies, AppConfig) {
    HTTP.set(this, $http);
    COOKIES.set(this, $cookies);
    CONFIG.set(this, AppConfig);
  }

  login(provider) {
    switch (provider) {
      case 'trello':
        return this.loginTrello();
        break;
      case 'wunderlist':
        return this.loginWunderlist();
        break;
      default:
        break;
    }
  }

  loginTrello() {
    return HTTP.get(this).get(CONFIG.get(this).host + '/trello/auth').then(result => result.data);
  }

  loginWunderlist() {
    return HTTP.get(this).get(CONFIG.get(this).host + '/wunderlist/auth').then(result => result.data);
  }

  exchangeTokenTrello(oauth_token, oauth_verifier) {
    return HTTP.get(this).get(
      CONFIG.get(this).host + '/trello/callback' +
      '?oauth_token=' + oauth_token +
      '&oauth_verifier=' + oauth_verifier
    ).then(result => result.data);
  }

  static authServiceFactory($http, $cookies, AppConfig) {
    return new AuthService($http, $cookies, AppConfig);
  }
}

AuthService.authServiceFactory.$inject = ['$http', '$cookies', 'AppConfig'];
