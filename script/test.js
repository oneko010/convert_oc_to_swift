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
