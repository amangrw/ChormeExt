 chrome.runtime.onInstalled.addListener(function() {
		chrome.tabs.query({currentWindow: true, active: true}, function(tabs){

	        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
		      if (change.url) {
		        let objects = {};
		        let data = change.url;
		        let currentDateTime = Date()
                localStorage["myurls"] = data;

				console.log(localStorage);
		        console.log(change.url);
		        console.log(currentDateTime);


          //       chrome.storage.local.set({key: change.url}, function() {
		        //   stored.push(data);
		        // });

				//localStorage.setItem("key",JSON.stringify(objects));

		        // StorageArea.set(object items, function(){
				      //   chrome.storage.local.set({key: change.url}, function() {
				      //     localStorage.push = change.url;
		      		// 	});
		        // });
		      }
		    });
		});
         
  });

 