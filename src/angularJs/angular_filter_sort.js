/**
 * Created by Administrator on 2015/12/20.
 * 利用angularJS进行排序
 */
angular.module('myApp', []).
    controller('myController', ['$scope', 'filterFilter', function($scope, filterFilter) {
    $scope.cameras = [
        {make:'Cannon', model:'70D', mp:20.2},
        {make:'Cannon', model:'60D', mp:20},
        {make:'Nikon', model:'71D', mp:23.2},
        {make:'Nikon', model:'53D', mp:21.2}
    ];

    $scope.filteredCameras = $scope.cameras;
    $scope.reverse = true;
    $scope.column = 'make';
    $scope.setSort = function(column) {
        $scope.column = column;
        $scope.reverse = !$scope.reverse;
    };
    $scope.filterString='';
    $scope.setFilter = function(value) {
        $scope.filteredCameras = filterFilter($scope.cameras, $scope.filterString);
    };
}]);