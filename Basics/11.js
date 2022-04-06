// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f) {
    const sum = a + b
    const substract = sum - c
    const multiply = substract * d
    const divide = multiply / e
    const square = Math.pow(divide, f)
    return square
}

console.log(myFunction(6,5,4,3,2,1))
console.log(myFunction(6,2,1,4,2,3))
console.log(myFunction(2,3,6,4,2,3))