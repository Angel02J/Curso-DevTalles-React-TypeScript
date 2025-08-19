import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
    test('should add two positives numbers', () => {

        //! 1. Arrange
        const a = 2;
        const b = 2;

        //! 2. Act
        const result = add(a, b);

        //! 3. Assert
        expect(result).toBe(4);
    });
});

describe('subtract', () => {
    test('The subtraction must be 5', () => {
        //! 1. Arrange
        const a = 7;
        const b = 2;

        //! 2. Act
        const result = subtract(a, b);

        //! 3. Assert
        expect(result).toBe(5);
    });

    test('There should be no negative numbers', () => {
        //! 1.Arrange
        const a = 10;
        const b = 9;

        //! 2. Act
        const result = subtract(a, b);

        if (result < 0) {
            throw new Error('Numero negativos');
        };

        //! 3. Assert
        expect(result).toBe(1);
    })
});

describe('multiply', () => {
    test('Should multiply two positive number', () => {
        //! 1. Arrange
        const a = 2;
        const b = 3;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assert
        expect(result).toBe(6);
    });

    test('The multiplication should not exceed 10', () => {
        //! 1. Arrange
        const a = 2;
        const b = 5;

        //! 2. Act
        const result = multiply(a, b);

        //! 3. Assert
        expect(result).toBe(10);
    })
});