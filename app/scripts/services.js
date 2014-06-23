'use strict';
angular.module('ifindCardApp.restServices',['ngResource'])

.factory('Tasks', ['$resource',function ($resource) {
	
	return $resource('http://localhost:5000/todo/api/v1.0/tasks',{},
		{query: { method: "GET", isArray: false }});

}])

.factory('Login', ['$resource',function ($resource) {
	
	return $resource('http://localhost:5000/auth/signin',{},
		{query: { method: "GET", isArray: false }});

}])

.factory('Login2', ['$http',function ($http) {
		var Login2 = {}

		Login2.fetchData = function(data){
			return $http({
		        url: 'http://localhost:5000/auth/signin',
		        method: "POST",
		        data: JSON.stringify(data),
		    });
		}

		return Login2
}])