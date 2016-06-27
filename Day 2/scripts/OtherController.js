/**
 * Created by Bina George Catalin on 27.06.2016.
 */

angular.module("hrApp").controller('OtherController',['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.title = 'Two way Binding Demo';

    $scope.setTitle = function () {
        $scope.title = 'Other title';
    }
}
]);