// Assignment Code
var generateBtn = document.querySelector("#generate");

/* Creating an array of characters that will be used to generate the password. */
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const specialCharacters = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "~", "/", "?", ".", ">", ",", "<", ";", ":", "'", "[", "{", "]", "}"];

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
  if (confirm("Would you like your password to contain Uppercase letters?")){
    choice = passwordLength.concat(upperCase);
  } if (confirm("Would you like your password to contain Lowercase letters?")){
    choice = passwordLength.concat(lowerCase);
  } if (confirm("Would you like your password to contain numbers?")){
    choice = passwordLength.concat(numbers);
  } if (confirm("Would you like your password to contain Special Characters?")){
    choice = passwordLength.concat(specialCharacters);
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
var choice = [];

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