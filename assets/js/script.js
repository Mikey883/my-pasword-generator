var generateBtn = document.querySelector("#generate");

    // Random character pull for the first 4 characters of the password
    function getRandomPositionInArray(arrayLength) {

        var randomNumber=Math.random();
        var randomValue=randomNumber*arrayLength;
        return Math.floor(randomValue);
    
    };
    
    // Arrays for password filling the remaining portion of the password
    function generateRandomUppercaseLetter() {
    
        var uppercaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var randomPosition=getRandomPositionInArray(uppercaseLetters.length);
        return uppercaseLetters[randomPosition];
    
    };
    
    function generateRandomLowercaseLetter() {
    
        var lowercaseLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var randomPosition=getRandomPositionInArray(lowercaseLetters.length);
        return lowercaseLetters[randomPosition];
        
    };
    
    function generateRandomNumberChar() {
    
        var numberChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var randomPosition=getRandomPositionInArray(numberChar.length);
        return numberChar[randomPosition];
        
    };
    
    function generateRandomSpecialChar() {
    
        var specialChar=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomSpecialCharAndUppercase() {
    
        var specialChar=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomAll() {
    
        var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomSpecialNumberUpper() {
    
        var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomSpecialNumberLower() {
    
        var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomNumberUpper() {
    
        var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

    function generateRandomNumberLower() {
    
        var specialChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var randomPosition=getRandomPositionInArray(specialChar.length);
        return specialChar[randomPosition];
        
    };

// Main password generation function   
function generatePassword() {
    var passwordLengthConf = prompt("Choose a password length: 8-128 characters.");
    
    // Password length validation via user input
    if (passwordLengthConf < 8 || passwordLengthConf > 128) {
        alert("Please enter a number between 8-128.");
        passwordLengthConf = 0;
        return generatePassword();
    };

    // Confirm statements used to aquire true or false based on user input
    var wantUppercase = confirm("Do you want uppercase letters?");
    var wantLowercase = confirm("Do you want lowercase letters?");
    var wantNumbers = confirm("Do you want numbers?");
    var wantSpecialChar = confirm("Do you want special characters?");

    // Console loggin the user input
    console.log(passwordLengthConf);
    console.log(wantLowercase);
    console.log(wantUppercase);
    console.log(wantNumbers);
    console.log(wantSpecialChar);

    // Variables that pull from the user input
    var includeuppercaseLetters=wantUppercase;
    var includelowercaseLetters=wantLowercase;
    var includenumberChar=wantNumbers;
    var includeSpecialChar=wantSpecialChar;
    var passwordLength=passwordLengthConf;

    var password="";

    // First 4 characters determined below based on user input
    if(includeuppercaseLetters) {
        password+=generateRandomUppercaseLetter();
    }
    if(includelowercaseLetters) {
        password+=generateRandomLowercaseLetter();
    }
    if(includenumberChar) {
        password+=generateRandomNumberChar();
    }
    if(includeSpecialChar) {
        password+=generateRandomSpecialChar();
    }
    
    // For loop determining the length of the password
    for(var i = password.length; i < passwordLength; i++){
        var typeOfCharacterToGenerate=true

        // Possible parameters for filling up the remaining length of the password (using the array functions above)
        if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantNumbers && typeOfCharacterToGenerate===wantUppercase && typeOfCharacterToGenerate===wantLowercase){
            password+=generateRandomAll();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantNumbers && typeOfCharacterToGenerate===wantUppercase){
            password+=generateRandomSpecialNumberUpper();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantNumbers && typeOfCharacterToGenerate===wantLowercase){
            password+=generateRandomSpecialNumberLower();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantUppercase){
            password+=generateRandomSpecialCharAndUppercase();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantLowercase){
            password+=generateRandomSpecialCharAndUppercase();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar && typeOfCharacterToGenerate===wantNumbers){
            password+=generateRandomSpecialCharAndUppercase();
        }
        else if(typeOfCharacterToGenerate===wantNumbers && typeOfCharacterToGenerate===wantUppercase){
            password+=generateRandomNumberUpper();
        }
        else if(typeOfCharacterToGenerate===wantNumbers && typeOfCharacterToGenerate===wantLowercase){
            password+=generateRandomNumberLower();
        }
        else if(typeOfCharacterToGenerate===wantUppercase){
            password+=generateRandomUppercaseLetter();
        }
        else if(typeOfCharacterToGenerate===wantLowercase){
            password+=generateRandomLowercaseLetter();
        }
        else if(typeOfCharacterToGenerate===wantNumbers){
            password+=generateRandomNumberChar();
        }
        else if(typeOfCharacterToGenerate===wantSpecialChar){
            password+=generateRandomSpecialChar();
        }
    }

    return password;

}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);