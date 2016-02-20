const SCOPE = new WeakMap();
const CARDSERVICE = new WeakMap();

export default class DashboardController {
  constructor($scope, CardService) {
    SCOPE.set(this, $scope);
    CARDSERVICE.set(this, CardService);

    $scope.name = 'Dashboard';
  }

  getCards() {
    CARDSERVICE.get(this).getCards().then(message => {
      this.cards = message;
    }, error => {
      console.log(error);
    })
  }
}

DashboardController.$inject = ['$scope', 'CardService'];
