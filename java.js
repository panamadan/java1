function generatePassword() {
    var length = 8,
        charset = "",
        uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lower = "abcdefghijklmnopqrstuvwxyz",
        numeric = "0123456789",
        special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '""',
        retVal = "";
        n = charset.length;
        var upperCaseprompt = prompt("Do you want upper case latters in your password?");
        if (upperCaseprompt === true) {
           charset += uppercase 
        }


// repeate for the 3 others


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




