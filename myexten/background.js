  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });


  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
          console.log(tabs[0].url);
    });
        chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
      if (change.url) {
        console.log(change.url);
        localStorage["inputText"] = change.url;
      }
    });



//save  any data
localStorage["inputText"] = change.url;