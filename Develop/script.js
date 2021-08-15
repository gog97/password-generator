// Assignment code here
 function generatePassword(){
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
   var allOptions = "";
   var finalPassword = "";
   var userPasswordLength = prompt("Enter your password length between 8-128");
   var userLowerCase = confirm("Do you want to use lowercase?");
   var userUppercase = confirm("Do you want to use uppercase?");

   if (userUppercase == true){
     allOptions = allOptions + uppercase;
   }

   if (userLowerCase == true){
     allOptions = allOptions + lowerCase;
   }  

   for (let i = 0; i < allOptions.length; i++) {
     
   } 


   return finalPassword;
 }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



