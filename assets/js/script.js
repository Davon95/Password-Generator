// Assignment code here
var upperCaseEl = document.getElementById('upperCaseLetter');
var lowerCaseEl = document.getElementById('lowerCaseLetter');
var numberEl = document.getElementById('numeric');
var specialEl = document.getElementById('special');
var lengthEl = document.getElementById('charLimit');
var generateEl = document.getElementById('generate');

var passwordGen = {
  lower: lowerCaseEl,
  upper: upperCaseEl,
  number: numberEl,
  special: specialEl,
  length: lengthEl
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(lower, upper, number, special, length) { 
  //var password = generatePassword("#generate");
  var passwordText = document.querySelector("#password");
  // Function here to generate password upon click of the button
  var upper = upperCaseEl.checked;
  var lower = lowerCaseEl.checked;
  var number = numberEl.checked;
  var special = specialEl.checked;
  var length = lengthEl.value;
  var checkBox = [upper, lower, number, special];
  console.log(checkBox);
  passwordText.value = password;
}


function lowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function number() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function specialCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
