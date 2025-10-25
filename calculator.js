/**

Simple Calculator Module

Provides basic arithmetic operations.
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Export functions for testing
module.exports = {
    add,
    subtract,
    multiply,
    divide
};