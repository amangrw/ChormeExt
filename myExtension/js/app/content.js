// //alert('content script loaded');

// chrome.extension.onMessage.addListener(
// function (request, sender, sendResponse) {

//     debugger;


//     if (request.action == 'PageInfo') {
//         var pageInfos = [];

//         $('a').each(function() {
//             var pageInfo = {};
            
//             var href = $(this).attr('href');

//             if (href != null && href.indexOf("http") == 0)
//             {
//                 //only add urls that start with http
//                 pageInfo.url = href
//                 pageInfos.push(pageInfo);
//             }
//         });

//         sendResponse(pageInfos);
//     }
// });



// var body = document.getElementByTagName('body');
// body.innerHTML = "<button>click</button>"

var div=document.createElement("div"); 
document.getElementsByClassName("result")[0].appendChild(div);
document.querySelector(".result").appendChild(div);
//document.getElementsByClassName("result").appendChild(div);
div.innerHTML="<div ng-app='myExtension' ng-csp><div class='suggestions' ng-controller='suggestionController'><div ng-repeat='suggestion in suggestions'><label class='suggestions-label'>e-commerce</label></div></div></div>";


  // var node = document.createElement("div");
  // var textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("myList").appendChild(node);


myApp.controller("suggestionController", function($scope, $http){
    $scope.suggestions = [];
    $scope.load = function(){
            $http({
                url: ' http://localhost:3000/suggestion',
                method: "GET",
                data: $scope.suggestions
            })
            .then(function(response) {
                // success
                $scope.suggestions = response.data;
            }, 
            function(response) { // optional
                // failed
                alert("unsuccessfull")
            });
        }
});
