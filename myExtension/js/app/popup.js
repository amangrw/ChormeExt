// creating service for collecting the current url informations
myApp.service('pageInfoService', function() {
    this.getInfo = function(callback) {
        var model = {};
        chrome.tabs.query({currentWindow: true, 'active': true}, function (tabs) {
                if (tabs.length > 0)
                {
                    model.title = tabs[0].title;
                    model.url = tabs[0].url;
                    chrome.tabs.sendMessage(tabs[0].id, { 'action': 'PageInfo' }, function (response) {
                        model.pageInfos = response;
                        callback(model);
                    });
                }

        });

    };
    
});

myApp.service('baseURLService', function() {
  return {
      baseURl : 'http://localhost:3000/',
      websiteCategorizationApi : 'https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName='
  };
});

// collecting and saving the the data
myApp.controller("taskController", function ($scope, $http, pageInfoService, baseURLService) {

    pageInfoService.getInfo(function (info) {
        $scope.title = info.title;
        $scope.url = info.url;

        $scope.getDataByApi = [];
        $scope.validTask = function(){
            $http({
                url: baseURLService.websiteCategorizationApi + $scope.url,
                method: "GET",
                data: $scope.getDataByApi
            })
            .then(function(response) {
                // success
                var  getData = response.data.categories;
                $scope.getDataByApi = getData;
                console.log(getData);
                // console.log(getData);
                // for (var i=0; i <= getData.length; i++) {
                //      $scope.getDataByApi[i]= getData[i]
                //     console.log($scope.getDataByApi)
                // }
            }, 
            function(response) { // optional
                // failed
                alert(url)
            });
        }

    });

    

}); 

// collecting and saving the the data
myApp.controller("PageController", function ($scope, $http, pageInfoService, baseURLService) {

    pageInfoService.getInfo(function (info) {
        $scope.title = info.title;
        $scope.url = info.url;
        $scope.pageInfos = info.pageInfos;
        $scope.date = Date();
        $scope.$apply();

        $scope.dataObject = {
            'url': $scope.url, 
            'title': $scope.title, 
            'time': $scope.date, 
            'tabId': "tabId"
        };
        //localStorage.setItem($scope.date, JSON.stringify($scope.dataObject));

        $http({
            url: baseURLService.baseURl +'urlData',
            method: "POST",
            data: $scope.dataObject
        })
        .then(function(response) {
            // success
        }, 
        function(response) { // optional
             // failed
        });
    });

    

});

// showing the logs
myApp.controller("showDataController", function($scope, $http, baseURLService){
    $scope.allLogs = [];
    $scope.toDoList = [];
    $scope.load = function(){
            $http({
                url: baseURLService.baseURl +'urlData',
                method: "GET",
                data: $scope.allLogs
            })
            .then(function(response) {
                // success
                $scope.allLogs = response.data;
            }, 
            function(response) { // optional
                alert("server is not connected")
                // failed
            });
        }

    $scope.toDoList = function(){
        $http({
        url: baseURLService.baseURl +'toDoList',
        method: "GET",
        data: $scope.toDoList
        })
        .then(function(response) {
            // success
            $scope.toDoList = response.data;
            alert(toDoList)
        }, 
        function(response) { // optional
            // failed
            alert("server is not connected")
        });
    }

});

// saving the text notes for each urls
myApp.controller("insertNotesController", function($scope, $http, pageInfoService){
    pageInfoService.getInfo(function (info) {
        $scope.url = info.url;
        $scope.notesObject = {
            'url': $scope.url, 
            'text': $scope.title
        };
        $scope.saveNotes = function(){
                $http({
                url: ' http://localhost:3000/urlNotes',
                method: "POST",
                data: $scope.notesObject
                })
                .then(function(response) {
                    // success
                }, 
                function(response) { // optional
                    // failed
                });
            }
    });

});

myApp.controller("insertToDoListController", function($scope, $http){
    $scope.data = {};
        $scope.inertToDoList = function(){
                $http({
                url: ' http://localhost:3000/toDoList',
                method: "POST",
                data: $scope.data
                })
                .then(function(response) {
                    // success
                    alert("created")
                }, 
                function(response) { // optional
                    // failed
                    alert("server is not connected")
                });
            }

});


