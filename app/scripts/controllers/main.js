'use strict';

angular.module('ifindCardApp')
  .controller('MainCtrl', ['$scope','Tasks',function ($scope,Tasks) {

  	$scope.tasks = Tasks.query();
  	
  }]);
