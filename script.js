//Combined Assignment Code & Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var confLength = "";
var confSpecialCharacter;
var confNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
  var confLength = (prompt("How many characters would you like in your password?"));

  while(confLength <=7 || confLength >=129) {
      alert("Password length must be between 8-128 characters! Try again");
      var confLength = (prompt("How many characters would you like in your password?"));
      } 
  
      alert(`Your password will have ${confLength} characters`); 

    var confSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      
      while(confUpperCase === false && confLowerCase === false && confSpecialCharacter === false && confNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

    
    var passwordCharacters = []
      
    if (confSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(special)
    }

    if (confNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confLowerCase) {
      passwordCharacters = passwordCharacters.concat(lower)
    }

    if (confUpperCase) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

      console.log(passwordCharacters)


var randomPassword = ""      
      for (var i = 0; i < confLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}