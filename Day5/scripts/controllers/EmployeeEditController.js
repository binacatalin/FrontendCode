//
//
//
hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService', 'DepartmentsService', 'JobsService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, EmployeeService, DepartmentsService, JobsService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        // Get employees
        EmployeeService.getEmployees()
            .then(function (res) {
                $scope.employees = res.data;
            }, function (err) {
                console.log("Error at getEmployees: " + err);
            });

        // Get departments
        DepartmentsService.getDepartments()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at getDepartments: " + err);
            });

        // Get jobs
        JobsService.getJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at getJobs: " + err);
            });
        // Get employee
        EmployeeService.getEmployee()
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at getEmployees: " + err);
            });

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);