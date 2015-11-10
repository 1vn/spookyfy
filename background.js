
var totalSpooks;
var superSpooks;
chrome.storage.sync.get('totalSpooks', function(item){
	totalSpooks=item.totalSpooks
	if(!totalSpooks){totalSpooks=0}
	if(!superSpooks){superSpooks=0}
})


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.cmd == "getcount"){
			sendResponse({count:totalSpooks});
		}
	}
);


chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	if(request.action == "spooked"){
		totalSpooks++
		chrome.browserAction.setBadgeBackgroundColor({ color: [10, 10, 10, 10] })
		chrome.browserAction.setBadgeText({'text': totalSpooks.toString()})
	}
	if(request.action == "superspooked"){
		superSpooks++;
	}
})
chrome.windows.onRemoved.addListener(function(windowId){
	chrome.storage.sync.set({'totalSpooks': totalSpooks}, function(){
	})
})

