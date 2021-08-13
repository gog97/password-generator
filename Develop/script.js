// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password", password);

  passwordText.value = password;
}

function generateBtn () {
	let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
}

for (var i = 0; i < 8; i++) {
	let generate = letters[Math.floor(Math.random() * 62)];
	password += generate;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function password () {
	let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"

	let password = ""
}


document.getElementById("test").innerHTML = password;
