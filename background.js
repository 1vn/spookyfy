console.log("Background loaded...")
chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
	chrome.browserAction.setBadgeBackgroundColor({ color: [255, 255, 255, 255] })
	chrome.browserAction.setBadgeText({'text': request.totalSpooks})
})
