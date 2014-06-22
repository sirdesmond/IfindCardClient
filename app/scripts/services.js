'use strict';
angular.module('ifindCardApp.restServices',['ngResource'])

.factory('Tasks', ['$resource',function ($resource) {
	
	return $resource('http://localhost:5000/todo/api/v1.0/tasks',{},
		{query: { method: "GET", isArray: false }});

}]);