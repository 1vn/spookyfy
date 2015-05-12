
var totalSpooks;
var superSpooks;
chrome.storage.sync.get('totalSpooks', function(item){
	totalSpooks=item.totalSpooks
	if(!totalSpooks){totalSpooks=0}
	if(!superSpooks){superSpooks=0}
})

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	if(request.action == "spooked"){
		totalSpooks++
		chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] })
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

