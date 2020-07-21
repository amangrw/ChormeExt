// ﻿//alert('content script loaded');

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
document.body.appendChild(div); 
div.innerHTML="<a href="#">test123</a>";
