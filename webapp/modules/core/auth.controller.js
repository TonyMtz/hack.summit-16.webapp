const LOCATION = new WeakMap();
const STATEPARAMS = new WeakMap();
const AUTHSERVICE = new WeakMap();
const COOKIES = new WeakMap();
const WINDOW = new WeakMap();

export default class DashboardController {
  constructor($location, $stateParams, AuthService, $cookies, $window) {
    LOCATION.set(this, $location);
    STATEPARAMS.set(this, $stateParams);
    AUTHSERVICE.set(this, AuthService);
    COOKIES.set(this, $cookies);
    WINDOW.set(this, $window);
  }

  init() {
    let provider = STATEPARAMS.get(this).provider;

    switch (provider) {
      case 'trello':
        let params = LOCATION.get(this).search();

        AUTHSERVICE.get(this).exchangeTokenTrello(params.oauth_token, params.oauth_verifier).then(xtoken => {
          COOKIES.get(this).put('x-token', xtoken);

          let window = WINDOW.get(this);

          window.localStorage.setItem('my-token-from-trello', new Date().getTime());
          window.close();
        });

        break;

      case 'wunderlist':

        console.log($stateParams.xToken);

        break;

      default:

        break;
    }
  }
}

DashboardController.$inject = ['$location', '$stateParams', 'AuthService', '$cookies', '$window'];
