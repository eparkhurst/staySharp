var app = angular.module('staySharp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "views/home.html",
      controller: "MainController"
    })
    .state('item', {
      url: "/item",
      templateUrl: "views/item.html",
      controller: "MainController"
    })
    .state('checkout', {
      url: "/checkout",
      templateUrl: "views/checkout.html",
      controller: "checkoutController"
    });
});
