/**
 * Created by user on 6/24/2016.
 */

angular.module("hrApp").controller('DescriptionController',['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.title = 'Two way Binding Demo';
    $scope.descriptionShow = true;

    $scope.childtemplate = 'templates/childscope.html';
    $scope.restFirstVariable = function () {
        $scope.restFirstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.setFirstVariable = val;
    };
    $scope.toggleDescriptionShow = function () {
        $scope.descriptionShow = !$scope.descriptionShow;
    }
}
]);

