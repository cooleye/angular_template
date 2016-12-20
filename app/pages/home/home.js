angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'pages/home/home.css',
    templateUrl:'pages/home/home.html',
    controller:'homeCtrl'
  })
  .state({
    name:'home.part1',
    url:'/part1',
    css:'pages/home/home.part1/part1.css',
    templateUrl:'pages/home/home.part1/home.part1.html',
    controller:function($css){
      $css.add('pages/home/home.css')
    }
  })
  .state({
    name:'home.part2',
    url:'/part2',
    templateUrl:'pages/home/home.part2/home.part2.html'
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
