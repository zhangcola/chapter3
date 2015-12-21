/**
 * Created by Administrator on 2015/12/20.
 */
angular.module('myApp',[])
.controller('myController', function($scope) {
    $scope.keyInfo={};
    $scope.mouseInfo={};
    $scope.keyStroke = function(event) {
        $scope.keyInfo.keyCode = event.keyCode;
    };

    $scope.mouseClick = function(event) {
        $scope.keyInfo.clientX = event.clientX;
        $scope.keyInfo.clientY = event.clientY;
        $scope.keyInfo.screenX = event.screenX;
        $scope.keyInfo.screenY = event.screenY;
    }
})