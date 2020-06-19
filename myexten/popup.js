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
console.log(data);

document.addEventListener('DOMContentLoaded', function() {
	let isOutput = document.getElementById('IsOutput');
	isOutput.innerHTML = data;
});
