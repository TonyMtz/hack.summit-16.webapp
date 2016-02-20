export default function routes($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'public/modules/dashboard/dashboard.html',
    controller: 'DashboardController',
    controllerAs:'dc'
  });
};

routes.$inject = ['$stateProvider'];
