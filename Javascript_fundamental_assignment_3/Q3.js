function checkTheString(inputString){
    const numRegex = /[0-9]/g
    const upperCaseREgex = /[A-Z]/g
    const lowerCaseRegex = /[a-z]/g
    const specialCharRegex =  /[^a-zA-Z0-9\s]/g

    const number = inputString.match(numRegex) || "not found"
    const upperCase = inputString.match(upperCaseREgex) || "not found"
    const lowerCase = inputString.match(lowerCaseRegex) || "not found"
    const specialCharacter = inputString.match(specialCharRegex) || "not found"

    return {
       number, upperCase, lowerCase, specialCharacter
    }
}


console.log(checkTheString("NaveenPattihal08@"));