//
//
//
hrApp.service('JobsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            getJobs: function () {
                return  $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                    .success(function (data, status, headers, config) {
                        return data;
                    })
                    .error(function (data, status, headers, config) {
                        alert("Error from JobsService: " + status);
                    });
            },
        }
    }]
);