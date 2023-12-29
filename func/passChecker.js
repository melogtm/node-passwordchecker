function isThereXCase(string, sCase) {

    let charComparable; 

    for (let i = 0; i < string.length; i++) {

        charComparable = sCase === "upper" ? string[i].toUpperCase() : string[i].toLowerCase(); 

        if (string[i] === charComparable) {
            return true; 
        }
    }

    return false; 
};

function findNumber(string) {
    // ^ - Starts the input 
    // \d - For any digit
    // $ - End of the input 
    let onlyDigitsString = string.split('').filter(c => /^\d$/.test(c)); 

    if (onlyDigitsString.length) {
        return true; 
    }
    return false; 
};

function findSpecialChar(string) {
    // Same logic in findNumber()
    return /[@#\$%\^\&*]/.test(string); 
}

function passChecker(pass) {
    let isValid = true; 

    let errorMessage = []; 

    if (pass.length < 8) {isValid = false; errorMessage.push("Sua senha deverá conter pelo menos 08 caracteres.")};
    
    if (!(isThereXCase(pass, "upper"))) {isValid = false; errorMessage.push("Sua senha deverá conter pelo menos uma letra maiúscula.")}; 

    if (!(isThereXCase(pass, "lower"))) {isValid = false; errorMessage.push("Sua senha deverá conter pelo menos uma letra minúscula")}; 

    if (!(findNumber(pass))) {isValid = false; errorMessage.push("Sua senha deverá conter pelo menos um dígito numérico.")};

    if (!(findSpecialChar(pass))) {isValid = false; errorMessage.push("Sua senha deverá conter pelo menos um caractere especial (e.g, !@#$%^*")}; 

    return {validation: isValid, error: errorMessage}; 
};

export {passChecker}; 