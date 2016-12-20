angular.module('projectDemo.catePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'cate',
    url:'/cate',
    templateUrl:'pages/cate/cate.html'
  })
})
