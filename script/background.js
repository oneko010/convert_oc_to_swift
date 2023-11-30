chrome.contextMenus.create({
	title: "转换剪贴板的OC代码",
	contexts: ["all"],
	id: "doConvert"
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	// background.js

	// 发送消息到内容脚本
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, { message: "Hello from background!" });
	});

})