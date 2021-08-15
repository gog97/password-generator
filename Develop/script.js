// Assignment code here
 function generatePassword(){
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowerCase = "abcdefghijklmnopqrstuvwxyz";
   var numbers = "0123456789";
   var allOptions = "";
   var finalPassword = "";
   var userPasswordLength = prompt("Enter your password length between 8-128");
   var userLowerCase = confirm("Do you want to use lowercase?");
   var userUppercase = confirm("Do you want to use uppercase?");
   var numbers = confirm("Do you want numbers?")
   var index = 0

   console.log(allOptions)

   if (userUppercase == true){
     allOptions = allOptions + uppercase;
   }

   console.log(allOptions)

   if (userLowerCase == true){
     allOptions = allOptions + lowerCase;
   }  

   console.log(allOptions)

   if (numbers == true){
     allOptions = allOptions + numbers;
   }

   console.log(allOptions)

   for (let i = 0; i < userPasswordLength; i++) {
     index = Math.floor(Math.random() * allOptions.length)
     finalPassword = finalPassword + allOptions[index]
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



