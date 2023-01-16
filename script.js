// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength;
let specialCharsPrompt;
let numericCharsPrompt;
let lowerCasedCharsPrompt;
let upperCasedCharsPrompt;

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = prompt(
    "Between 10 characters and 64 characters, what length would you like your password to be?"
  );
  if (passwordLength === null) {
    return;
  } else {
  while ((passwordLength < 10) || (passwordLength > 64) || isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a number between 10 and 64.");
    if (passwordLength === null) {
      break;
    }
    if (passwordLength > 10 && passwordLength < 64) {
      alert("Thank you for choosing a length for your password.");
    }
  }  
  let validateUserSelection = false;

  while(!validateUserSelection) {
    specialCharsPrompt = confirm("Would you like to use Special Characters in your password?");
    numericCharsPrompt = confirm("Would you like to use Numeric Characters in your password?");
    lowerCasedCharsPrompt = confirm("Would you like to use Lower Cased Characters in your password?");
    upperCasedCharsPrompt = confirm("Would you like to use Upper Cased Characters in your password.?");
  }

  if (
    specialCharsPrompt || numericCharsPrompt || lowerCasedCharsPrompt || upperCasedCharsPrompt 
  ) {
    validateUserSelection = true;
  } else {
    alert("Please select at least one option for characters type.");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // randomIndex gets a random index value
  var randomIndex = Math.floor(Math.random() * arr.length);
  // item gets a random from the array
  var item = arr[randomIndex];
  return item;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  let password = '';
  for (i = 0; i < passwordLength; i++) {
    if (specialCharsPrompt) {
      password += getRandom(specialCharacters);
    }
    if (numericCharsPrompt) {
      password += getRandom(numericCharacters);
    }
    if (lowerCasedCharsPrompt) {
      password += getRandom(lowerCasedCharacters);
    }
    if (upperCasedCharsPrompt) {
      password += getRandom(upperCasedCharacters);
    }
  }
  return password;
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);