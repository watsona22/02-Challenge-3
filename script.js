// Write password to the #password input
var generateBtn = document.querySelector("#generate");
function generatePassword() {

  //parseInt was used her to take the string value, entered by the user and turn it into a number.
  var preferredLength = parseInt(window.prompt("What is the preferred length of your password? (8-128 characters) "));
  //console.log(preferredLength);
  //Number.isNan was used to correct for the user case where a NaN or (anything other than a number) was entered - suggested by tutor, Erik Hirsch.
  //Initially I had the preferredLength criteria specified in positive terms. Including the negative case (as below) is more concise. 
  if (Number.isNaN(preferredLength) || preferredLength >= 129 || preferredLength <= 7) {
    alert("You must do it right! Please enter a numeric value between 8 and 128.")
    return generatePassword();

  }
  //the following are criteria prompts for each character type in our password.
  var lowercase = window.confirm("Do you want to include lowercase letters? True or False?")
  var uppercase = window.confirm("Do you want to include uppercase letters? True or False?");
  var numeric = window.confirm("Do you want to include numeric characters? True or False?");
  var special = window.confirm("Do you want to include special characters? True or False?");
  //It was suggested that I include a user case where no criteria were chosen.
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Please select at least one case criteria.")
    return generatePassword();
  }
  //this variable will house all of our (user-entered) criteria.
  var possibleChars = ""
  if (lowercase === true) {
    const lowercharacters = 'abcdefghijklmnopqrstuvwxyz';
    // the following statement(s) specify that we will add the result of each prompt to the possibleChars variable created above. 
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

  }
  //console.log(possibleChars)
  //this variable will contain the generated password (including results from the possibleChars variable above). The "generate random string" for-loop template was taken from programiz.com and refined by tutor, Erik Hirsch. We also specified that it should not exceed the preferredLength specified by the user at the start. 
  var result = ""
  for (let i = 0; i < preferredLength; i++) {
    result += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    //console.log(result)
  }
  return result;
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

generateBtn.addEventListener("click", writePassword);