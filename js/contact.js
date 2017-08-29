var checkForm = function() {
	var name = document.getElementById("name").value;
	var nameVal = name.length >= 2;
	
	var email = document.getElementById("email").value;
	var re = /\S+@\S+\.\S+/;
    var emailVal = re.test(email);
	
	var message = document.getElementById("message").value;
	var messageVal = message.length > 10 && message.length < 1000;
	
	var result = nameVal && emailVal && messageVal;
	
	var response = document.getElementById("response");
	if (result) {
		response.innerHTML = "Thanks, we'll get back to you as soon as possible."
	} else {
		response.innerHTML = "Sorry, there's something wrong with what you entered. Please enter a valid name and email, and don't leave the message field empty."
	}
	
	return result;
}