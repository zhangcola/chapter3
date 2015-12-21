/**
 * Created by Administrator on 2015/12/20.
 */
angular.module('myApp', []).
    controller('myController', function($scope) {
    $scope.cameras = [
        {make:'Cannon', model:'70D', mp:20.2},
        {make:'Cannon', model:'60D', mp:20},
        {make:'Nikon', model:'71D', mp:23.2},
        {make:'Nikon', model:'53D', mp:21.2}
    ];
    $scope.cameraObj = $scope.cameras[0];
    $scope.cameraName = 'Cannon';
    $scope.cbValue='';
    $scope.someText='';
})