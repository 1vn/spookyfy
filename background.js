console.log("Background loaded...")
var totalSpooks;
chrome.storage.local.get('totalSpooks', function(item){
	console.log(item.totalSpooks)
	totalSpooks=item.totalSpooks
	if(!totalSpooks){totalSpooks=0}
})

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log("Adding to counter...")
	totalSpooks++
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] })
	chrome.browserAction.setBadgeText({'text': totalSpooks.toString()})
})

chrome.windows.onRemoved.addListener(function(windowId){
	chrome.storage.local.set({'totalSpooks': totalSpooks}, function(){
	console.log("Spookysaved")
	})
})

