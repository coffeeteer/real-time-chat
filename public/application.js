'use strict';

const socket = io();
socket.emit("chat:add", {
	message: 'blegh'
});