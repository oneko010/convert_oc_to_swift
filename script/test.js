(function(){
	console.log("hello1");
})();

function doConvert(code) {
	const textArea = document.getElementById("prompt-textarea");
	const sendButton = document.querySelector('[data-testid="send-button"]');
	if (textArea) {
		textArea.value = code;
		
		const event = new Event('input', {bubbles: true})
		textArea.dispatchEvent(event)

		setTimeout(function() {
			sendButton.click()
		}, 500)
	}
}

// content.js

// 接收来自后台脚本的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("Received message from background:", message);
  

  navigator.clipboard.readText()
    .then(text => {
      console.log('剪贴板内容：', text);
      // 在这里可以处理读取到的文本内容
      doConvert(text + ' 转换成swift')
    })
    .catch(err => {
      console.error('无法读取剪贴板内容：', err);
    });


  // doConvert(message.message)
});

