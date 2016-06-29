//
//
//
hrApp.service('DepartmentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            getDepartments: function () {
                return  $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error from DepartmentsService: " + status);
                    });
            },
        }
    }]
);