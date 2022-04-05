// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function myFunction(a, b) {
    // Neste caso, é só usar o operador de estrita igualdade (===)
    return a === b
}

console.log(myFunction(2, 3))
console.log(myFunction(3, 3))
console.log(myFunction(1, '1'))
console.log(myFunction('10', '10'))