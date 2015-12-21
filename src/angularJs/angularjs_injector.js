/**
 * Created by Administrator on 2015/12/16.
 * AngularJS 依赖注入
 */

var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from My Module');
myMod.controller('controllerB', ['$scope', 'modMsg', function($scope, msg) {
    $scope.message = msg;
}]);

var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', "Hello from My App");
myApp.controller('controllerA', ['$scope', 'appMsg', function($scope , msg) {
    $scope.message = msg;
}]);