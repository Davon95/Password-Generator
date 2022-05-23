// Assignment code here
var passwordLetter = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!@#$%^&*()_+"
};

// Created function for length and character checks
function generatePassword() {
  var userInput = prompt("Choose password length between 8-128 characters.");
  var characterBox = "";
  var password = "";
  debugger;
  // Add conditional statements on character limits
  if (userInput >= 8 && userInput <= 128) {
    upperCase = confirm("Do you want to inlude a Uppercase?");
    lowerCase = confirm("Do you want to inlude a Lowercase?");
    numbers = confirm("Do you want to inlude a Numbers?");
    specialChar = confirm("Do you want to inlude a Sepcial Character?");
    if (upperCase === true && lowerCase === true && numbers === true && specialChar === true) {
      //alert("Please select at least one option.");
      if (upperCase) {
        characterBox += passwordLetter.upperCase
      }
      if (lowerCase) {
        characterBox += passwordLetter.lowerCase
      }
      if (numbers) {
        characterBox += passwordLetter.numbers
      }
      if (specialChar) {
        characterBox += passwordLetter.specialChar
      }
      for (let i = 0; i < userInput; i++) {
        password += characterBox[Math.floor(Math.random() * characterBox.length)]
      }
      return password;
    }
    else if (upperCase === false && lowerCase === false && numbers === false && specialChar === false) { 
      alert("Please select at least one option.");
      return generatePassword();
    }
    else if (userInput < 8 || userInput > 128) {
      alert("Please choose the appropriate length");
      return userInput;
    }
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  //var password = generatePassword("#generate");
  var passwordText = document.querySelector("#password");
  // Function here to generate password upon click of the button

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
