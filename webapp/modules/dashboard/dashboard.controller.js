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
  }

  init() {
    let $scope = SCOPE.get(this);
    let $window = WINDOW.get(this);

    $scope.name = 'Dashboard';

    $scope.isTrello = false;
    $scope.isWunderlist = false;

    $window.angular.element($window).on('storage', function (event) {
      if (event.key === 'my-token-from-trello') {
        $scope.isTrello = true;
        $scope.$digest();
      } else if (event.key === 'my-token-from-wunderlist') {
        $scope.isWunderlist = true;
        $scope.$digest();
      }
    });
  }

  getCards() {
    CARDSERVICE.get(this).getCards().then(message => {
      this.cards = message;
    }, error => {
      console.log(error);
    })
  }

  loginWL() {
    LOGINSERVICE.get(this).loginWL().then(message => this.openDialog(message))
  }

  loginTrello() {
    LOGINSERVICE.get(this).trello().then(message => this.openDialog(message));
  }

  openDialog(message) {
    WINDOW.get(this).open(message, 'name', 'width=400, height=600', false).focus();
  }
}

DashboardController.$inject = ['$scope', 'CardService', 'LoginService', '$window'];
