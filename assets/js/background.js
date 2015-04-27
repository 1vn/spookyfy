var totalSpooks = 0
console.log("LOL")
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
chrome.browserAction.setBadgeText({text: totalSpooks}, function(){
	console.log("Success!")
})