hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location', 'commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        $http.get(commonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeid)
            .success(function (data, status, headers, config) {
                $scope.employee = data;
                // console.log(data);
            })
            .error(function (data, status, headers, config) {
                alert("zzzError: " + status);
            });
        //.....................................................................



        $scope.back = function() {
            // TODO back to Employee List page
            $location.url('/employeeslist');
        }

    }]);