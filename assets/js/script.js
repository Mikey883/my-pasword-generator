function getRandomPositionInArray(arrayLength) {

    var randomNumber=Math.random();
    var randomValue=randomNumber*arrayLength;
    return Math.floor(randomValue);

}

function generateRandomUppercaseLetter() {

    var uppercaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomPosition=getRandomPositionInArray(uppercaseLetters.length);
    return uppercaseLetters[randomPosition];

}

function generateRandomLowercaseLetter() {

    var lowercaseLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomPosition=getRandomPositionInArray(lowercaseLetters.length);
    return lowercaseLetters[randomPosition];
    
}

function generateRandomNumberChar() {

    var NumberChar=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var randomPosition=getRandomPositionInArray(NumberChar.length);
    return NumberChar[randomPosition];
    
}

function generateRandomSpecialChar() {

    var SpecialChar=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var randomPosition=getRandomPositionInArray(SpecialChar.length);
    return SpecialChar[randomPosition];
    
}