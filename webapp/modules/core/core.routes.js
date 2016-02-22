export default function routes($stateProvider) {
  $stateProvider.state('auth', {
    url: '/auth/:provider/:xToken',
    templateUrl: 'public/modules/core/auth.html',
    controller: 'AuthController',
    controllerAs: 'ac'
  });
};

routes.$inject = ['$stateProvider'];
