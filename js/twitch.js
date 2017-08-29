window.onload = function() {
	// Check twitch on load 
	checkTwitch();
	
	// Check every 5 minutes from now on
	var interval = 5 * 60 * 1000; // 5 mins
	setInterval(checkTwitch, interval);
	
}

var checkTwitch = function() {
	console.log("Checking for live streams...");
	$.ajax({ 
		url:'https://api.twitch.tv/kraken/streams?channel=calamarcat,chompsontheloose,thecoachadair,superhiero',
		headers: { 'Client-ID': '38ekto2u8sxx81if576gjimspyrbsq' },
		success: function(data) { 
			displayStreams(data.streams);
		},
		error: function(err) {
			console.log("Stream request failed");
			console.log(err);
			var outer = document.getElementById("twitch");
			outer.style.visibility = "hidden";
			outer.style.display = "none";
		}
	});
}

var displayStreams = function(streams) {
	var outer = document.getElementById("twitch");
	var msg = document.getElementById("twitch-msg");
	var names = [];
	var code = "<h2>We're live on Twitch!</h2> <p>Watch us at ";
	for (var i = 0; i < streams.length; i++) {
		var name = streams[i].channel.display_name;
		names.push(name);
		code += names.length > 1 ? "or " : "";
		code += "<span class='twitch-link'><a href='https://www.twitch.tv/" + name + "'>" + name + "</a></span> ";
	}
	
	if (names.length > 1) {
		code += "or <a href='http://kadgar.net/live/" + names.join("/") + "'>watch all of us!</a>";
	}
	
	code += "</p>";
	
	if (names.length > 0) {
		msg.innerHTML = code;
		outer.style.visibility = "visible";
		outer.style.display = "block";
	} else {
		outer.style.visibility = "hidden";
		outer.style.display = "none";
	}
	
};