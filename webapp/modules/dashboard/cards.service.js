const HTTP = new WeakMap();
const CONFIG = new WeakMap();

export default class CardService {
  constructor($http, AppConfig) {
    HTTP.set(this, $http);
    CONFIG.set(this, AppConfig);
  }

  getCards() {
    return HTTP.get(this).get(CONFIG.get(this).host + '/cards').then(result => result.data);
  }

  static cardServiceFactory($http, AppConfig) {
    return new CardService($http, AppConfig);
  }
}

CardService.cardServiceFactory.$inject = ['$http', 'AppConfig'];
