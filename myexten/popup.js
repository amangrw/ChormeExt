let data = Object.entries(localStorage);
let globalcurrentUrl;
let all_url;
let counts = {};

//fetching and saving the all urls in localStorage
chrome.runtime.onInstalled.addListener(function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
		        if (change.url) {
			        let currentDateTime = Date();
			        let currentUrl = change.url;
	                localStorage.setItem(currentDateTime , currentUrl);
		        }
		        var counts = {};
				for (var i = 0; i < all_url.length; i++) {
				  var num = arr[i];
				  counts[num] = counts[num] ? counts[num] + 1 : 1;
				}
				console.log(counts[currentUrl]);
		    });
		}); 
 });


chrome.runtime.onInstalled.addListener(function() {
	window.onbeforeunload = function () {
	    return alert("Do you really want to close?");
	};
});

function setValue(currentUrl){
	globalcurrentUrl = currentUrl ;
	console.log(globalcurrentUrl);
}

//showing the whole data from localStorage 
document.addEventListener('DOMContentLoaded', function() {
	let isOutput = document.getElementById('IsOutput');
	if (isOutput != null){
		for (var i = 0; i < data.length; i++) {
		  var obj = data[i];
		  isOutput.innerHTML = isOutput.innerHTML +"<tr><td style='width:20px;'>"+(i+1)+"</td><td>" + obj[0] + "</td><td class='urls'><a target='_blank' href='"+ obj[1]+ "'>" + obj[1] + "</a></td></tr>";
		}
	}
});


for (var i = 0; i < data.length; i++) { 
	var obj = data[i];
	all_url = all_url + obj[1] + ",";

}

//console.log(globalcurrentUrl);




  


 
