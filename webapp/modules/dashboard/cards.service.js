let moduleName = 'dashboard.services';

const HTTP = new WeakMap();

export default class CardService {
  constructor($http) {
    HTTP.set(this, $http);
  }

  getCards() {
    return HTTP.get(this).get('http://169.55.85.55:9000/cards').then(result => result.data);
  }

  static cardServiceFactory ($http) {
    return new CardService($http);
  }
}

CardService.cardServiceFactory.$inject = ['$http'];
