function generatePassword() {
    var length = 8,
        charset = "",
        uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase = "abcdefghijklmnopqrstuvwxyz",
        numeric = "0123456789",
        special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '""',
        retVal = "";
        n = charset.length;
        var upperCaseprompt = prompt("Do you want upper case latters in your password?");
        if (upperCaseprompt === true) {
           charset += uppercase 
        }

        var lowercase = prompt("Do you want lower case latters in your password?");
        if (lowerCaseprompt === true) {
           charset += lowercase 
        }
        var numeric = prompt("Do you want numeric in your password?");
        if (numericprompt === true) {
           charset += numeric 
        }
        var specialprompt = prompt("Do you want special characters in your password?");
        if (specialprompt === true) {
           charset += special 
        }



// add innertext for id=password for inside the box to generate the passwor
    for (var i = 0 ; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;


}

var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", function () {
    
    console.log(generatePassword());
})





