let data = Object.entries(localStorage);
let all_url =[]	;


for (var i = 0; i < data.length; i++) { 
	var obj = data[i];
	all_url[i] = obj[1];

}

chrome.runtime.onInstalled.addListener(function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
		        if (change.url) {
			        let currentDateTime = Date();
			        let currentUrl = change.url;
				localStorage.setItem(currentDateTime , currentUrl, tabId);
				if (all_url != null){
					var counts = {};
					for (var i = 0; i < all_url.length; i++) {
						var num = all_url[i];
						counts[num] = counts[num] ? counts[num] + 1 : 1;
					}	
					if( counts[change.url] >= 10 ){
						alert(counts[change.url]+ " times you visited this url : "+ change.url);							
					}
				}
		        }
		    });
		}); 
 });

chrome.runtime.onInstalled.addListener(function() {
	window.onbeforeunload = function () {
	    return alert("Do you really want to close?");
	};
});


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






  


 
