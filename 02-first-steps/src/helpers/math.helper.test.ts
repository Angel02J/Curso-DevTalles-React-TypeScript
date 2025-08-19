import { expect, test } from 'vitest';
import { add } from './math.helper';

test('should add two numbers', () => {

    //! 1. Arrange
    //! 2. Act
    //! 3. Assert

    const result = add(1, 3);
    expect(result).toBe(4);
});