(function () {
  "use strict";

  angular
    .module('pokemon', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/pokemon', {
          templateUrl: 'pokemon/views/list.html',
          controller: 'PokemonController'
        })
        .otherwise({ redirectTo: '/404'});
    });


})();
