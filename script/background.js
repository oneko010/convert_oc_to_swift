chrome.contextMenus.create({
	title: "转换剪贴板的OC代码",
	contexts: ["all"],
	id: "doConvert"
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, { message: "clicked menu" });
	});

})


