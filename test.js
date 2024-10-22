class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calc = new Calculator();
console.log("Add: " + calc.add(5, 3));        // Output: Add: 8
console.log("Subtract: " + calc.subtract(5, 3)); // Output: Subtract: 2
console.log("Multiply: " + calc.multiply(5, 3)); // Output: Multiply: 15
console.log("Divide: " + calc.divide(5, 3));    // Output: Divide: 1.6666666666666667
const Calculator = require('./test');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('should subtract two numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers correctly', () => {
        expect(calc.multiply(5, 3)).toBe(15);
    });

    test('should divide two numbers correctly', () => {
        expect(calc.divide(6, 3)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(5, 0)).toThrow("Division by zero is not allowed.");
    });
});