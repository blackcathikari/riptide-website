window.onload = function() {
	var teamHeading = document.getElementById("team-members-heading");
	var teamContent = document.getElementById("team-cards");
	var twitterHeading = document.getElementById("team-twitter-heading");
	var twitterContent = document.getElementById("twitter-iframes");
	
	console.log("Width is " + window.innerWidth);
	
	if (window.innerWidth < 450) {
		teamHeading.className = "accordion-heading";
		twitterHeading.className = "accordion-heading";
		
		teamContent.className = "accordion-content";
		twitterContent.className = "accordion-content";
	}
};