let data = Object.entries(localStorage);
let all_url;

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
console.log(all_url	)


  


 
