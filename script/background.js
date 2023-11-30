chrome.contextMenus.create({
	title: "doConvert",
	contexts: ["doConvert"],
	onclick: function() {
		alert('click');
	}
})