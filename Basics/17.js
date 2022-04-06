// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
    // A função Math.round() retorna o valor de 
    // um número arredondado para o inteiro mais proximo
    return Math.round(a * 100) / 100
}

console.log(myFunction(2.12397))
console.log(myFunction(3.136))
console.log(myFunction(1.12397))
console.log(myFunction(26.1379))