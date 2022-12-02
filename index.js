const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

function publish() {
	//connect 이벤트
	client.on('connect', function () {
		client.subscribe('mqtt/test/publish');
	    client.publish('mqtt/test/publish', 'Hello mqtt publish');
	})
	 
	//message 받기(event listener)
	client.on('message', function (topic, message) {
	  // message is Buffer
	  console.log(message.toString())
	  client.end()
	})
}

publish();