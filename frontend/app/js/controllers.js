app.controller("MainController", function($scope, $http, cartService){

  $scope.cart=[]
  $scope.numberOfItems = 0
  $scope.checkoutLink = "#/"

  $scope.checkout = function(){
    if($scope.numberOfItems>0) $scope.checkoutLink = "#/checkout"
  }

  $scope.setCategory=function(category){
    console.log(category);
  }

  $scope.addToCart = function(quantity, tea){
    if(!quantity) return
    cartService.cart.push({tea:tea,quantity:quantity});
    console.log(cartService.cart);
    $scope.numberOfItems += parseInt(quantity);
  }

  $http.get('http://localhost:3000/').then(function successCallback(response){
      $scope.data = response.data;
  }, function errorCallback(response){
    console.log(response);
  });

})


app.controller("checkoutController", function($scope, cartService){
  $scope.cart = cartService.cart;
  $scope.totalCost = calcCost($scope.cart);
  $scope.showQuantity = false;

  $scope.removeItem = function(index){
    cartService.cart.splice(index, 1);
    $scope.totalCost = calcCost($scope.cart);
  }

  $scope.toggleQuantity = function(){
    this.tea.showQuantity = !this.tea.showQuantity;
  }

  $scope.updateQuantity = function(index, newQuantity){
    cartService.cart[index].quantity = newQuantity;
    $scope.totalCost = calcCost($scope.cart);
  }
})

function calcCost(cart){
  var total=0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].quantity) * parseInt(cart[i].tea.price)/100
  }
  return total
}
