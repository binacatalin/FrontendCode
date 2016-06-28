/**
 * Created by user on 6/28/2016.
 */
/**
 * Created by user on 6/28/2016.
 */



myApp.controller('FormsController', ['$scope', function ($scope) {
    $scope.submitted = function () {
        $scope.submittMessage = ($scope.myForm.$valid) ? "Submit status OK" : "Submit status :(";
    }
}]);