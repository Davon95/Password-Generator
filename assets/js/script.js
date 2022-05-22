// Assignment code here
const uppercaseEl = document.getElementById('upperCaseLetter');
const lowercaseEl = document.getElementById('lowerCaseLetter');
const numberEl = document.getElementById()

function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function uppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function number() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function specialCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
function characterLimit() {
  
}

console.log(specialCharacters());
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
