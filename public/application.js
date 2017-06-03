'use strict';

const socket = io();
socket.emit("chat:add", {
	message: 'blegh'
});

const chatInput = document.querySelector('.chat-form input[type=text]');

chatInput.addEventListener('keypress', (event) => {
	if(event.keyCode !== 13){
		return;
	}

	event.preventDefault();

	const text = event.target.value.trim();
	if(text.length === 0){
		return;
	}
})