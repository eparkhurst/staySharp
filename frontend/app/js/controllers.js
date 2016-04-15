app.controller("MainController", function($scope, $http){
  $scope.line="this works"
})

app.directive('navBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html'
  };
});
