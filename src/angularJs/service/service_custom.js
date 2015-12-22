/**
 * Created by Administrator on 2015/12/22.
 * 自定义AngularJS服务
 */
var app = angular.module('myApp', []);
app.value("censorWrods", ['bad', 'mad', 'sad']);
app.constant('repString', '***');
app.factory('censorF', ['censorWrods', 'repString', function(cWords, repString) {
    return function(inString) {
        var outString = inString;
        for (i in cWords) {
            outString = outString.replace(cWords, repString);
        }
        return outString;
    }
}]);

function censorObj(cWords, repString) {
    this.censor = function(inString) {
        var outString = inString;
        for (i in cWords) {
            outString = outString.replace(cWords[i], repString);
        }
        return outString;
    };
}

app.service('censorS',  ['censorWords', 'repString', censorObj]);

app.controller('myController', ['$scope', 'censorF', 'censorS', function($scope, censorF, censorS) {
    $scope.censoredByFactory = censorF('mad text');
    $scope.censooredByService = censorS.censor('bad text');
}])
