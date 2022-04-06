// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

function myFunction(a, b) {
    // Usar operador ternário em vez de if/else
    return (a < b) ? a / b : a * b
}

console.log(myFunction(10, 100))
console.log(myFunction(90, 45))
console.log(myFunction(8, 20))
console.log(myFunction(2, 0.5))