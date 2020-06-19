chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
		        if (change.url) {
			        let data = change.url;
			        let currentDateTime = Date()
	                	localStorage.setItem(currentDateTime , data);
		        }
		 });


	}); 
 });

let data = Object.entries(localStorage);

document.addEventListener('DOMContentLoaded', function() {
	let isOutput = document.getElementById('IsOutput');
	if (isOutput != null){
		isOutput.innerHTML = data;
	}
});

for (var i = 0; i < data.length; i++) { // the plainest of array loops
  var obj = data[i];
  // for..in object iteration will set the key for each pair
  // and the value is in obj[key]
  for (var key in obj) { 
    	console.log(key, obj[key]);
  }
}

 
