angular.module('staySharp').service('cartService', function(){
    this.cart = []
})

angular.module('staySharp').factory('batch_service', function($http){
  return {
    getBatches:function(){
      return $http.get(config.host +'dashboard').then(function(data){
        return data.data;
      });
    },
    createBrew:function(brew){
      return $http.post(config.host +'dashboard',brew);
    }
  };
});
