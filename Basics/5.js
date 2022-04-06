// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction(a) {
    // O método slice() extrai uma parte de uma string e a 
    // retorna como uma nova string, sem modificar a string original.
    return a.slice(3)
}

console.log(myFunction('1234'))