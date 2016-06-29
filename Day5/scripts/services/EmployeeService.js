//
//
//
hrApp.service('EmployeeService', ['$http', '$routeParams', 'CommonResourcesFactoryBackup', function ($http, $routeParams, CommonResourcesFactoryBackup) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            getEmployees: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: " + status);
                    });
            },
            getEmployee: function () {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + $routeParams.employeeId)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: " + status);
                    });
            },
            deleteEmployee: function () {
                return $http.delete(CommonResourcesFactoryBackup.deleteEmployeeUrl + $routeParams.employeeId)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error: " + status);
                    });
            }
        }
    }]
);
