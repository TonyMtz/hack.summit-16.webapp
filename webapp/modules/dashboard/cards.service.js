const HTTP = new WeakMap();
const CONFIG = new WeakMap();
const COOKIES = new WeakMap();

export default class CardService {
  constructor($http, AppConfig, $cookies) {
    HTTP.set(this, $http);
    CONFIG.set(this, AppConfig);
    COOKIES.set(this, $cookies);
  }

  getCards() {
    let xToken = COOKIES.get(this).get('x-token');
    return HTTP.get(this).get(CONFIG.get(this).host + '/cards/' + xToken).then(result => result.data);
  }

  static cardServiceFactory($http, AppConfig, $cookies) {
    return new CardService($http, AppConfig, $cookies);
  }
}

CardService.cardServiceFactory.$inject = ['$http', 'AppConfig', '$cookies'];
