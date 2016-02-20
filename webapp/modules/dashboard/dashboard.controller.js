const SCOPE = new WeakMap();
const CARDSERVICE = new WeakMap();
const LOGINSERVICE = new WeakMap();
const WINDOW = new WeakMap();

export default class DashboardController {
  constructor($scope, CardService, LoginService, $window) {
    SCOPE.set(this, $scope);
    CARDSERVICE.set(this, CardService);
    LOGINSERVICE.set(this, LoginService);
    WINDOW.set(this, $window);

    $scope.name = 'Dashboard';
  }

  getCards() {
    CARDSERVICE.get(this).getCards().then(message => {
      this.cards = message;
    }, error => {
      console.log(error);
    })
  }

  loginWL() {
    LOGINSERVICE.get(this).loginWL().then(message => {
      console.log(message);
      WINDOW.get(this).open(message, "_blank");
    })
  }
}

DashboardController.$inject = ['$scope', 'CardService', 'LoginService', '$window'];
