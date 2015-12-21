/**
 * Created by Administrator on 2015/12/16.
 */
var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'some';
    $scope.last = 'one';
    $scope.heading = 'message: ';
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first + " " + $scope.last + "~";
    }
});