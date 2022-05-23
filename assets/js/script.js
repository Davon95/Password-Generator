// Assignment code here
var passwordLetter = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  specialChar: "!@#$%^&*()_+"
};

// Created function for length and character checks
function generatePassword() {
  var characterBox = "";
  var password = "";
  var userInput = prompt("Please choose a password length between 8-128 characters.");
  debugger;
  // Add conditional statements on character limits
  if (userInput >= 8 && userInput <= 128) {
    upperCase = confirm("Do you want to include uppercase letters?");
    lowerCase = confirm("Do you want to include lowercase letters?");
    numbers = confirm("Do you want to include numbers?");
    specialChar = confirm("Do you want to include a special characters?");
    // Added condition if user choose at least on true statement
    if (upperCase === true || lowerCase === true || numbers === true || specialChar === true) {
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
    // If user chose none, user will have to redo process again
    else if (upperCase === false && lowerCase === false && numbers === false && specialChar === false) { 
      alert("Please select at least one option.");
      return generatePassword();
    }
    // If user put the less desiered length, will have to type again
  } else if (userInput < 8 || userInput > 128) {
    alert("Please type the appropriate length.");
    return generatePassword();
  }
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  //var password = generatePassword("#generate");
  var passwordText = document.querySelector("#password");
  // Function here to generate password upon click of the button
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
