'use strict';

angular.module('opowerEnerygsavingsApp')
  .controller('MainCtrl', function ($scope, _) {
    $scope.currentViz = 'cars';
    $scope.cars = {
      notsaved: _.range(9),
      saved: _.range(6)
    };
    $scope.trees = {
      notsaved: _.range(6),
      saved: _.range(3)
    };
    $scope.carbon = {
      notsaved: _.range(8),
      saved: _.range(4)
    };
  });
