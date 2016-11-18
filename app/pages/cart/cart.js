angular.module('projectDemo.cartPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'cart',
    url:'/cart',
    templateUrl:'app/pages/cart/cart.html'
  })
})
