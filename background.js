console.log("Background loaded...")

var totalSpooks = chrome.storage.sync.get({'totalSpooks': totalSpooks}, function(){
	message('Spooky retrieved')
})

if(!totalSpooks) {totalSpooks = 0};
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	console.log("Adding to counter...")
	totalSpooks++
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] })
	chrome.browserAction.setBadgeText({'text': totalSpooks.toString()})
})

chrome.windows.onRemoved.addListener(function(windowId){
	chrome.storage.sync.set({'totalSpooks': totalSpooks}, function(){
		message('Spooky saved')
	})
})

