const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
    test('add() should return sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
    });

    test('subtract() should return difference of two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(3, 5)).toBe(-2);
    });

    test('multiply() should return product of two numbers', () => {
        expect(multiply(4, 5)).toBe(20);
        expect(multiply(-2, 3)).toBe(-6);
    });

    test('divide() should return quotient of two numbers', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(-9, 3)).toBe(-3);
    });

    test('divide() should throw error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
    });
});