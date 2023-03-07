// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Homework 3 Hints:
//use Math.random() and Math.floor() to select a random index from an array.
//Use promt(), confirm(), and alert() to retrieve input from users.

function generatePassword(length) {
  let password = ('');
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()?><:|}{+_~`-=[]\;',./"
  let passwordLength = length; 


}  