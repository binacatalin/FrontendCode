/**
 * Created by user on 6/28/2016.
 */



myApp.controller('ColorsController', ['$scope', function ($scope) {
    $scope.selectedColor;
    $scope.selectedClass;
    
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text" : "primary",
            "class": "text-primary",
            "type" : "strong"
        },
        {
            "text" : "success",
            "class": "text-success",
            "type" : "strong"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type" : "boring"
        },
        {
            "text" : "warning",
            "class": "text-warning",
            "type" : "boring"
        },
        {
            "text" : "danger",
            "class": "text-danger",
            "type" : "boring"
        }
    ];
    $scope.changeColor = function () {
        $scope.selectedClass = $scope.selectedColor.class;
    }

    $scope.filterizer = function(txt, c, ty) {

    }
    // var result = objArray.map(function(a) {return a.foo;});
}]);