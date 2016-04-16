var app = angular.module('staySharp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "views/home.html"
    })
    .state('item', {
      url: "/item",
      templateUrl: "views/item.html",
      controller: "MainController"
    })
    .state('checkout', {
      url: "/checkout",
      templateUrl: "views/checkout.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });
});
