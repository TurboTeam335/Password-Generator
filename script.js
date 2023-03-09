// Assignment Code
var generateBtn = document.querySelector("#generate");
var choice = '';

/* Creating an array of characters that will be used to generate the password. */
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers =  "0123456789"
const specialCharacters =  "!@#$%^&*()_+-=`~/?.>,<;:'[{]}";

function generatePassword() {
  // console.log("TEST")
  
  // Prompt the user for the password criteria
  
  generateBtn =alert("Would you like to generate a password?");
  
  // password length between 8-128
  passwordLength = prompt("How long would you like your password to be between 8-128 characters?");
  console.log(typeof passwordLength, passwordLength)
  
  if (!passwordLength) {
    alert("Please enter a valid number.")
    return generatePassword ()
  }
  
  if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please pick between 8-128"); 
    passwordLength = parseInt(passwordLength)
    return;
  }
  
  
  // Lowercase, uppercase, numbers, special characters
  if (confirm("Would you like your password to contain Uppercase letters?") == true){
    choice += upperCase;
  } if (confirm("Would you like your password to contain Lowercase letters?") == true){
    choice += lowerCase;
  } if (confirm("Would you like your password to contain numbers?") == true){
    choice += numbers;
  } if (confirm("Would you like your password to contain Special Characters?") == true){
    choice += specialCharacters;
  }
  // Validate the input
  var randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length);
    randomPassword = randomPassword + choice[randomCharacter];
  }
  // generate password
  
  // Display generated password
  return randomPassword
}

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
//Use prompt(), confirm(), and alert() to retrieve input from users.