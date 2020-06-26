let data = Object.entries(localStorage);
let globalcurrentUrl;
let all_url =[]	;


for (var i = 0; i < data.length; i++) { 
	var obj = data[i];
	all_url[i] = obj[1];

}

//fetching and saving the all urls in localStorage
chrome.runtime.onInstalled.addListener(function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
	        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
			    let prevUrl = document.referrer;
		        if (change.url) {
			        let currentDateTime = Date();
			        if( change.url != "chrome://newtab/"){
	                	localStorage.setItem(currentDateTime , change.url);
			        }
			        // alert(prevUrl);
			        // alert(change.url);
			        
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
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

  (e || window.event).returnValue = confirmationMessage; //Gecko + IE
  return confirmationMessage;                            //Webkit, Safari, Chrome
});

// function setValue(currentUrl){
// 	globalcurrentUrl = currentUrl ;
// 	console.log(globalcurrentUrl);
// };

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



//console.log(globalcurrentUrl);




  


 
