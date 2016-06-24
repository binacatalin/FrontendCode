/**
 * Created by user on 6/24/2016.
 */



angular.module("hrApp").controller('ScopesController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.title = 'Two way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.restFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    };
}
]);