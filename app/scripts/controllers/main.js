'use strict';

angular.module('ifindCardApp')
  .controller('MainCtrl', ['$scope','Login',function ($scope,Login) {

  		$scope.valid = false
  		$scope.login = function(){
        var data = {username: $scope.username,password:$scope.password}
           
           var response = Login.save(data)
           response.$promise.then(function(result){
           		$scope.response = result;
  		})
  	}
  }]);
