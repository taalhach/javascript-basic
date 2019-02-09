"use strict"




// correctName is not declared so it will throw error
// correctName="program 1"
// console.log("throw error in strict mode: ",correctName)

var program="program 1"
console.log("variable declared and initialised: ",program)


AccessVariableGlobally()
// this statement throws error bcz variable is not declared and only initialised directly
// console.log("This is function variable: ",globalName)

function AccessVariableGlobally() {
    // globalName="Block360"
    var localVariable="CIE-NUST"
}
