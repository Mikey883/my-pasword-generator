var generateBtn = document.querySelector("#generate");

    function getRandomPositionInArray(arrayLength) {

        var randomNumber=Math.random();
        var randomValue=randomNumber*arrayLength;
        return Math.floor(randomValue);
    
    };
    
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

function generatePassword() {
    var passwordLengthConf = prompt("Choose a password length: 8-128 characters.");
    

    // Password length validation
    if (passwordLengthConf < 8 || passwordLengthConf > 128) {
        alert("Please enter a number between 8-128.");
        passwordLengthConf = 0;
        return generatePassword();
    };

    var wantUppercase = confirm("Do you want uppercase letters?");
    var wantLowercase = confirm("Do you want lowercase letters?");
    var wantNumbers = confirm("Do you want numbers?");
    var wantSpecialChar = confirm("Do you want special characters?");

    console.log(passwordLengthConf);
    console.log(wantLowercase);
    console.log(wantUppercase);
    console.log(wantNumbers);
    console.log(wantSpecialChar);

    var includeuppercaseLetters=wantUppercase;
    var includelowercaseLetters=wantLowercase;
    var includenumberChar=wantNumbers;
    var includeSpecialChar=wantSpecialChar;
    var passwordLength=passwordLengthConf;

    var password="";

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
    
    for(var i = password.length; i < passwordLength; i++){
        var typeOfCharacterToGenerate=true

        if(typeOfCharacterToGenerate===wantUppercase){
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