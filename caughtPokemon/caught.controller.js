(function () {
  "use strict";
  angular
  .module('caught')
  .controller('CaughtController', function ($http, $scope, CaughtService, $routeParams) {
    CaughtService.getCaught().success(function (caught) {
      $scope.caughtPokemon = caught;
    });
    if($routeParams._id){
      CaughtService.detail($routeParams._id).success(function(data){
        // console.log(data);
        $scope.pokemon = data;
        $http.get(data.resource_url).success(function(data){
          console.log(data);
          $scope.pokemonData = data;
        });
      });
    }
    // else{
    //   CaughtService.getCaught().success(function(pokemon){
    //     console.log(pokemon);
    //     $scope.pokemon = pokemon;
    //   });
    // }

    else{
      CaughtService.getCaught().success(function(data){
        $scope.pokemon = data;
      });
    }
    $scope.deletePokemon = function(pokemon){
      CaughtService.deletePokemon(pokemon);
    };
    $scope.toggleHidden = function(cls){
      CaughtService.toggleHidden(cls);
    }
  });
})();
