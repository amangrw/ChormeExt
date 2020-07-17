myApp.service('pageInfoService', function() {
    this.getInfo = function(callback) {
        var model = {};

        chrome.tabs.query({currentWindow: true, 'active': true},
        function (tabs) {
            //chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
                if (tabs.length > 0)
                {
                    model.title = tabs[0].title;
                    model.url = tabs[0].url;
                    //model.date = Date()

                    // model.dataObject = { 'url': model.url, 'title': model.title, 'time': model.date, 'tabId': "tabId" };
                    // localStorage.setItem(model.date, JSON.stringify(model.dataObject));

                    chrome.tabs.sendMessage(tabs[0].id, { 'action': 'PageInfo' }, function (response) {
                        model.pageInfos = response;
                        callback(model);
                    });
                }
            //});

        });
    };
    
});

myApp.controller("PageController", function ($scope, $http, pageInfoService) {

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
        localStorage.setItem($scope.date, JSON.stringify($scope.dataObject));

        $http({
            url: ' http://localhost:3000/urlsData',
            method: "POST",
            data: $scope.dataObject
        })
        .then(function(response) {
            // success
            alert("successfull")
        }, 
        function(response) { // optional
            // failed
            alert("unsuccessfull")
        });

    });

    chrome.runtime.onInstalled.addListener(function() {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
                if (change.url) {
                    alert("aman");
                }
            });
        }); 
 });
        
    
});

//