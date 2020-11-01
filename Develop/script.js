// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
// 7 primitive types:
//     number
//     boolean
//     string
//     bigInt
//     null
//     undefined
//     symbol
// User presses a button ---> A random password is generated
// Password length is between 8 and 128.
// This password can contain:
//         lowercase
//         uppercase
//         special characters
//         numbers
// function generateUserOptions:
// Prompt user for length -> store as variable.
  var length = prompt('How many characters would you like PW to be?');
            // Returns a string.
            length = parseInt(length);
            // Return from function if it is empty.
            if (length === "") {
              return "";
            }
            if (length < 8){
              alert("Password length must be greater than 8 characters!")
              return "";
            }
            if (length > 128){
              alert("Password length must be less than 128 characters!")
              return "";
            }
            if (!length){
              return "";
            }

    // Ask them what character types we should include. (upper/lower/numbers/specialChars)
        var shouldIncludeLower = confirm('Would you like to include lowercase letters?');
        var shouldIncludeUpper = confirm('Would you like to include uppercase letters?');
        var shouldIncludeNumbers = confirm('Would you like to include lowercase letters?');
        var shouldIncludeSpecialCharacters = confirm('Would you like to include special characters (!@#$)?');
    // If they don't pick any types then return start
            if (!shouldIncludeLower && !shouldIncludeNumbers && !shouldIncludeSpecialCharacters && !shouldIncludeUpper){
              alert("Please select at least one category!")
              return "";
            }

        var lowercase = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var numbers = ['0', 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var specialCharacters = ['@', '%', '+', '/', '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[',  '~',  '-',  '_',  '.'];
 
// Create an object that stores all five of the user inputs
// passwordOptions = object that stores five of the user

        var passwordOptions = {
            length: length,
            shouldIncludeLower: lowercase,
            shouldIncludeUpper: uppercase,
            shouldIncludeNumbers: numbers,
            shouldIncludeSpecialCharacters: specialCharacters,
        }
        return passwordOptions;

// How do we know what to add to our option Pool??
// function makeid(length) {
//   var result           = '';
//   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   var charactersLength = characters.length;
//   for ( var i = 0; i < length; i++ ) {
//      result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
// console.log(makeid(5));
//  if (options.lowercase) 
// function to generate user password characters at random

function passwordOptions(){

  var optionPool = [];
  var finalPassword = [];

         if (passwordOptions.shouldIncludeLower === true){
           
          optionPool = optionPool.concat(passwordOptions.lowercase);
          for ( var i = 0; i < passwordOptions.lowercase.length; i++ ) {  
              optionPool.concat(lowercase[i]);
          }
         }

         if (passwordOptions.shouldIncludeUpper === true){
           
          optionPool = optionPool.concat(passwordOptions.uppercase);
          for ( var i = 0; i < passwordOptions.uppercase.length; i++ ) {
              optionPool.concat(passwordOptions.uppercase[i]);
          }
         }

         if (passwordOptions.shouldIncludeNumbers === true){

          optionPool = optionPool.concat(passwordOptions.numbers[i]);
          for ( var i = 0; i < passwordOptions.numbers.length; i++ ) {
              optionPool.concat(passwordOptions.numbers);
         }
        }

         if (passwordOptions.shouldIncludeSpecialCharacters === true){

          optionPool = optionPool.concat(passwordOptions.specialCharacters[i]);
          for ( var i = 0; i < passwordOptions.specialCharacters.length; i++ ) {
              optionPool.concat(passwordOptions.specialCharacters);
          }
         }

         for ( var i = 0; i < length; i++ ) {
              characters.charAt(Math.floor(Math.random() * charactersLength));
         }

         finalPassword.push(optionPool);
         
      return finalPassword;

      }


    }

























