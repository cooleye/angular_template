angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'app/pages/home/home.css',
    templateUrl:'app/pages/home/home.html',
    controller:'homeCtrl'
  })
  .state({
    name:'home.part1',
    url:'/part1',
    css:'app/pages/home/home.part1/part1.css',
    templateUrl:'app/pages/home/home.part1/home.part1.html',
    controller:function($css){
      $css.add('app/pages/home/home.css')
    }
  })
  .state({
    name:'home.part2',
    url:'/part2',
    templateUrl:'app/pages/home/home.part2/home.part2.html'
  })
})
.controller('homeCtrl',function($scope){

    $scope.arr = [
{name:'aa',age:18},
{name:'aa',age:18},
{name:'aa',age:18},
{name:'aa',age:18},
{name:'aa',age:18},
{name:'aa',age:18},
{name:'aa',age:18}
    ]
})
