(function(){
	console.log("hello1");
})();

setTimeout(function() {
	const textArea = document.getElementById("prompt-textarea");
	const sendButton = document.querySelector('[data-testid="send-button"]');
	if (textArea) {
		textArea.value = "hello";
		console.log("find");
		
		const event = new Event('input', {bubbles: true})
		textArea.dispatchEvent(event)

		setTimeout(function() {
			sendButton.click()
		}, 500)
	}
}, 5000)

// content.js

// 接收来自后台脚本的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Received message from background:", message);
  // 在这里执行你想要的操作
});

