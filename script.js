// Write password to the #password input
function writePassword() {
    var password = [preferredLength, lowercase, uppercase, numeric, special]
  
    var generateBtn = document.querySelector("#generate");
  
    var passwordText = document.querySelector("#password"); 
  
    var preferredLength = window.prompt("What is the preferred length of your password? (8-128 characters) ");
      if(preferredLength >=8 && preferredLength <=128){
        var lowercase = window.prompt("Do you want to include lowercase letters? True or False?")
      }else {
        window.prompt("Please choose a number between 8 and 128")
      }
      
      
      if(lowercase === true){
      //program to generate random string from programiz.com
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      function generateRandomString(length){
      let result = ''; 
      const lowercase = characters.length;
      for (let i=0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * lowercase));
      }
      return result("#password");
     }
    }else {
      var uppercase = window.prompt("Do you want to include uppercase letters? True or False?");
     }
    
     if(uppercase === true){
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      function generateRandomString(length){
      let result = ''; 
      const uppercase = characters.length;
      for (let i=0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * uppercase));
      }
      return result("#password");
      }
     }else {
      var numeric = window.prompt("Do you want to include numeric characters? True or False?");
     }
     
     if(numeric === true){
      const characters = '0123456789';
      function generateRandomString(length){
      let result = ''; 
      const numeric = characters.length;
      for (let i=0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * numeric));
      }
      return result("#password");
     }
    }else {
      var special = window.prompt("Do you want to include special characters? True or False?");
     }
     
     if(special === true){
      const characters = '!@#$%^&*()';
      function generateRandomString(length){
      let result = ''; 
      const numeric = characters.length;
      for (let i=0; i < length; i++ ){
        result += characters.charAt(Math.floor(Math.random() * special));
      }
      return result("#password");
  }
     }else {
      // Add event listener to generate button
      generateBtn.addEventListener("click", writePassword);
      passwordText.value = password;
     }  
  }
      writePassword();
    
  