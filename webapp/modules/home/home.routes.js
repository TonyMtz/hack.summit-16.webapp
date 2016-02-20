export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'public/modules/home/home.html',
    controller: 'HomeController'
  });

  $urlRouterProvider.otherwise('/home');
};

routes.$inject = ['$stateProvider', '$urlRouterProvider'];
