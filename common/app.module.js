(function () {
  "use strict";

  angular
    .module('pokedex', [
      'ngRoute',
      'underscore',
      'pokemon',
      'caught'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<h1>Welcome to the Pokedex</h1>',
          controller: 'MainController'
        })
        .when('/404', {
          template: '<h1> Sorry, page not found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });

  angular
    .module('underscore', [])
    .factory('_', function($window){
      return $window._;
    });
    angular
    .module('jquery', [])
    .factory('$', function($window){
      return $window.$;
    });
})();
