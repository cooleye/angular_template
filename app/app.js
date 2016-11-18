angular.module('projectDemo',['ui.router','angularCSS',
'projectDemo.homePage',
'projectDemo.catePage',
'projectDemo.cartPage',
'projectDemo.minePage'])
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
})
