(function () {
  "use strict";
  angular
  .module('caught')
  .factory('CaughtService', function ($http) {
    var url = 'https://tiny-tiny.herokuapp.com/collections/caught-pokemon';
    var detailUrl = 'https://pokeapi.co/'
    var getCaught = function () {
      return $http.get(url);
    };
    var catchPokemon = function(pokemon){
      $http.post(url, pokemon).then(function(res){
        // $rootScope.$broadcast('like:added');
        console.log(res.data._id);
        var numb = res.data.resource_uri.match(/\d/g);
        numb.shift();
        var id = parseInt(numb.join(''));
        $http.put(url + '/' + res.data._id, {apiid: id});
        $http.put(url + '/' + res.data._id, {resource_url: detailUrl + res.data.resource_uri});
      });
    };
    var deletePokemon = function(pokemon){
      // pokemon.remove();
      $http.delete(url + '/' + pokemon._id);
    };
    var detail = function(pokemonId){
      return $http.get(url + '/' + pokemonId);
    };
    var toggleHidden = function(cls){
      console.log('fired');
      console.log(cls);
      $(cls).toggleClass('hidden');
    }
    return {
      getCaught: getCaught,
      catchPokemon: catchPokemon,
      deletePokemon: deletePokemon,
      detail: detail,
      toggleHidden: toggleHidden,
    };
  })
})();
