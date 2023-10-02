// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  //var password = [preferredLength, lowercase, uppercase, numeric, special]



  var preferredLength = parseInt(window.prompt("What is the preferred length of your password? (8-128 characters) "));
  console.log(preferredLength);
  //include user case when NaN is entered
  if  (Number.isNaN(preferredLength) || preferredLength >= 129 || preferredLength <= 7) {
    alert("You must do it right!")
    return generatePassword();    
    
  }
  var lowercase = window.confirm("Do you want to include lowercase letters? True or False?")
  var uppercase = window.confirm("Do you want to include uppercase letters? True or False?");
  var numeric = window.confirm("Do you want to include numeric characters? True or False?");
  var special = window.confirm("Do you want to include special characters? True or False?");
  if(!lowercase && !uppercase && !numeric && !special){

  }
  var possibleChars = ""
  if (lowercase === true) {
    //program to generate random string from programiz.com
    const lowercharacters = 'abcdefghijklmnopqrstuvwxyz';

   possibleChars += lowercharacters
  } 

  if (uppercase === true) {
    const uppercharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    possibleChars += uppercharacters
  } 
  

  if (numeric === true) {
    const numericcharacters = '0123456789';

    possibleChars += numericcharacters
  }

  if (special === true) {
    const specialcharacters = '!@#$%^&*()@+//\'?:,{[]~-_.';
    possibleChars += specialcharacters
    
    function generateRandomString(length) {
      let result = '';
      const numeric = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * special));
      }
      return result(document.querySelector("#password"));
    }
  } 
  console.log(possibleChars)
  //write a for loop here that loops once for each character the user would like to have in their password
  //generate random string from programiz.com/ refined with the help of tutor, Erik Hersch.
  var result = ""
   for (let i = 0; i < preferredLength; i++) {
        result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        console.log(result)
      }
      return result;
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);