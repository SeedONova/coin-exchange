const {
    recursiveExchange,
    nonRecursiveExchange,
    recursiveChanges,
    nonRecursiveChanges
} = require('./index');

describe('recursiveExchange', () => {
    beforeEach(() => {
        recursiveChanges.length = 0;
    });

    test('should correctly calculate the denominations for 1752 recursively', () => {
        recursiveExchange(1752);
        expect(recursiveChanges).toEqual([1000, 500, 200, 50, 1, 1]);
    });

    test('should handle exact denomination matches', () => {
        recursiveExchange(500);
        expect(recursiveChanges).toEqual([500]);
    });

    test('should handle a combination of denominations', () => {
        recursiveExchange(250);
        expect(recursiveChanges).toEqual([200, 50]);
    });

    test('should handle large numbers', () => {
        recursiveExchange(10000);
        expect(recursiveChanges).toEqual(Array(10).fill(1000));
    });

    test('should handle amounts smaller than the smallest denomination', () => {
        recursiveExchange(2);
        expect(recursiveChanges).toEqual([1, 1]);
    });

    test('should handle zero input', () => {
        recursiveExchange(0);
        expect(recursiveChanges).toEqual([]);
    });
});

describe('nonRecursiveExchange', () => {
    beforeEach(() => {
        nonRecursiveChanges.length = 0;
    });

    test('should correctly calculate the denominations for 1752 non-recursively', () => {
        nonRecursiveExchange(1752);
        expect(nonRecursiveChanges).toEqual([1000, 500, 200, 50, 1, 1]);
    });

    test('should handle exact denomination matches', () => {
        nonRecursiveExchange(500);
        expect(nonRecursiveChanges).toEqual([500]);
    });

    test('should handle a combination of denominations', () => {
        nonRecursiveExchange(250);
        expect(nonRecursiveChanges).toEqual([200, 50]);
    });

    test('should handle large numbers', () => {
        nonRecursiveExchange(10000);
        expect(nonRecursiveChanges).toEqual(Array(10).fill(1000));
    });

    test('should handle amounts smaller than the smallest denomination', () => {
        nonRecursiveExchange(2);
        expect(nonRecursiveChanges).toEqual([1, 1]);
    });

    test('should handle zero input', () => {
        nonRecursiveExchange(0);
        expect(nonRecursiveChanges).toEqual([]);
    });
});
