// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab, change) {
//     alert('updated from contentscript');
//     alert(tabId);
//     let currentUrl = tab.url;
//     if( tab.url){
//         alert(currentUrl);
//     }
//  });

        // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        //     chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
        //         if (change.url) {
        //             alert('updated from contentscript');
        //             alert(tabId);
        //             saveurl();
        //             // let currentUrl = tab.url;
        //             // if( tab.url){
        //                 alert("currentUrl");
        //             // }
        //         }
        //     });
        // }); 




myApp.service('pageInfoService', function() {
    this.getInfo = function(callback) {
        var model = {};

        chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
            chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
                if (change.url) {
                    //alert('updated from contentscript');
                    //alert(tabId);
                    saveurl();
                    // let currentUrl = tab.url;
                    // if( tab.url){
                        //alert("currentUrl");
                    // }
                }
            });
        }); 

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
        //localStorage.setItem($scope.date, JSON.stringify($scope.dataObject));

        $scope.saveurl = function(){
            //alert("i am in")
        }
        //$scope.saveurl = function(){
                $http({
                url: ' http://localhost:3000/urlData',
                method: "POST",
                data: $scope.dataObject
            })
            .then(function(response) {
                // success
                //alert("successfull")
            }, 
            function(response) { // optional
                // failed
                alert("unsuccessfull")
            });
        //}
    });

    

});


myApp.controller("allLogsListController", function($scope, $http){
    $scope.allLogs = [];
    $scope.load = function(){
            $http({
                url: ' http://localhost:3000/urlData',
                method: "GET",
                data: $scope.allLogs
            })
            .then(function(response) {
                // success
                $scope.allLogs = response.data;
            }, 
            function(response) { // optional
                // failed
                alert("unsuccessfull")
            });
        }

});

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
                    alert("saved")
                }, 
                function(response) { // optional
                    // failed
                    alert("unsuccessfull")
                });
            }
    });

});








        
