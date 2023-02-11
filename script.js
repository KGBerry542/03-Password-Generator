// Assignment code here

// Characters that can be used in password generator
let specialCharacter = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', ':', ';', '<', '>', '/', '?'];
let numberCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let uppercaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowercaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let passwordLength = 8;
let choiceArray = [];

function generatePassword() {
  console.log("Password!!")
}

function passwordPrompts() {
  passwordLength = parseInt(prompt("Please type how many characters you will like your password to be. (8-128 characters) "))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("ERROR. Password length entered was not a number. Please enter a number between 8 to 128.");
    return false;
  }

  if (confirm("Would you like your password to include lowercase letters?")) {
    choiceArray = choiceArray.concat(lowercaseCharacter);
  }

  if (confirm("Would you like your password to include uppercase letters?")) {
    choiceArray = choiceArray.concat(uppercaseCharacter);
  }

  if (confirm("Would you like your password to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharacter);
  }

  if (confirm("Would you like your password to include numbers?")) {
    choiceArray = choiceArray.concat(numberCharacter);
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);