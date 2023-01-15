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

const passwordLength = prompt("Between 10 characters and 64 characters, what length would you like your password to be?");
const specialCharsPrompt = prompt("Would you like to use Special Characters in your password?");
const numericCharsPrompt = prompt("Would you like to use Numeric Characters in your password?");
const lowerCasedCharsPrompt = prompt("Would you like to use Lower Cased Characters in your password?");
const upperCasedCharsPrompt = prompt("Would you like to use  Upper Cased Characters in your password?"); 

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength;
  specialCharsPrompt;
  numericCharsPrompt;
  lowerCasedCharsPrompt;
  upperCasedCharsPrompt;

  if (passwordLength.isNAN === false) {
    alert("Please enter a number between 10 and 64.");
  } else if ((passwordLength <= 10) || (passwordLength >= 64)) {
    alert("You have entered a number that is not between 10 and 64.")
  } else {
    confirm("Thank you for choosing a length for your password.");
  }
  if (specialCharsPrompt === false) {
    alert("You have chosen to not include a Special Character in your password.");
  } else if(specialCharsPrompt !== specialCharacters) {
    alert("Please enter Special Characters from this selection: " + specialCharacters + ".");
  }  {
    confirm("Thank you for choosing your Special Character(s)");
  }
  if (numericCharsPrompt === false) {
    alert("You have chosen to not include a Numeric Character in your password.");
  } else if(numericCharsPrompt !== numericCharacters) {
    alert("Please enter Numeric Characters from this selection: " + numericCharacters + ".");
  } else {
    confirm("Thank you for choosing your Numeric Character(s)");
  }
  if (lowerCasedCharsPrompt === false) {
    alert("You have chosen to not include a Lower Cased Character in your password.");
  } else if(lowerCasedCharsPrompt !== lowerCasedCharacters) {
    alert("Please enter Lower Cased Characters from this selection: " + lowerCasedCharacters + ".");
  } else {
    confirm("Thank you for choosing your Lower Cased Character(s)");
  }  
  if (upperCasedCharsPrompt === false) {
    alert("You have chosen to not include an Upper Cased Character in your password.");
  } else if(upperCasedCharsPrompt !== upperCasedCharacters) {
    alert("Please enter Upper Cased Characters from this selection: " + upperCasedCharacters + ".");
  } else {
    confirm("Thank you for choosing your Upper Cased Character(s)");
  }
  return;
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
  // randomIndex gets a random index value
  var randomIndex = Math.floor(Math.random() * arr.length);
  // item gets a random from the array
  var item = arr[randomIndex];
  return item;
}

var randomSpecialCharacters = getRandom(specialCharsPrompt);
var randomNumericCharacters = getRandom(numericCharsPrompt);
var randomLowerCasedChars = getRandom(lowerCasedCharsPrompt);
var randomUpperCasedChars = getRandom(upperCasedCharsPrompt);
// Function to generate password with user input
function generatePassword() {
  let password = randomSpecialCharacters + randomNumericCharacters + randomLowerCasedChars + randomUpperCasedChars + passwordLength;

  return password;

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