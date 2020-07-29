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

//var div=document.createElement("div"); 
//var result = document.getElementsByClassName("result");
//document.querySelector(".result").appendChild(div);
//document.getElementsByClassName("result").appendChild(div);
//div.innerHTML="<div ng-app='myExtension' ng-csp><div class='suggestions' ng-controller='suggestionController'><div ng-repeat='suggestion in suggestions'><label class='suggestions-label'>e-commerce</label></div></div></div>";


var result = document.getElementsByClassName("result");
// var link = document.getElementsByClassName("js-result-title");

for (var i = 0; i < result.length; i++) {
	var link = document.getElementsByClassName("js-result-title")[i];
	var div=document.createElement("div"); 
	div.innerHTML="<div class='suggestions'><label class='suggestions-label'>"+link.href+"</label></div>";
	result[i].appendChild(div);
	//console.log(link[i].href);
	getInformation(link);
}

function getInformation(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText
      console.log(data.categories[0])
    }
  };
  xhttp.open("GET", "https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName=" + link, true);
  xhttp.send();
}

  // var node = document.createElement("div");
  // var textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("myList").appendChild(node);


// myApp.controller("suggestionController", function($scope, $http){
//     $scope.suggestions = [];
//     $scope.load = function(){
//             $http({
//                 url: 'https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName=bbc.com',
//                 method: "GET",
//                 data: $scope.suggestions
//             })
//             .then(function(response) {
//                 // success
//                 $scope.suggestions = response.data;
//                 alert("hi");
//             }, 
//             function(response) { // optional
//                 // failed
//                 alert("unsuccessfull")
//             });
//         }
// })
