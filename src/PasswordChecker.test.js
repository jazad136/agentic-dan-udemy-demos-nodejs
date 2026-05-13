import { test, describe } from 'node:test';
import assert from 'node:assert';
import { checkPassword, checkPasswordAndThrowReason } from './PasswordChecker.js';

describe('checkPassword', () => {
    test('returns true for valid password with all requirements', () => {
        assert.strictEqual(checkPassword('Abc123!'), true);
    });

    test('returns true for complex valid password', () => {
        assert.strictEqual(checkPassword('MyP@ssw0rd'), true);
    });

    test('returns false when missing uppercase letter', () => {
        assert.strictEqual(checkPassword('abc123!'), false);
    });

    test('returns false when missing lowercase letter', () => {
        assert.strictEqual(checkPassword('ABC123!'), false);
    });

    test('returns false when missing digit', () => {
        assert.strictEqual(checkPassword('Abcdef!'), false);
    });

    test('returns false when missing special character', () => {
        assert.strictEqual(checkPassword('Abc123'), false);
    });

    test('returns false for empty string', () => {
        assert.strictEqual(checkPassword(''), false);
    });

    test('returns false when missing multiple requirements', () => {
        assert.strictEqual(checkPassword('abc'), false);
    });
});

describe('checkPasswordAndThrowReason', () => {
    test('does not throw for valid password with all requirements', () => {
        assert.doesNotThrow(() => {
            checkPasswordAndThrowReason('Abc123!');
        });
    });

    test('does not throw for complex valid password', () => {
        assert.doesNotThrow(() => {
            checkPasswordAndThrowReason('MyP@ssw0rd');
        });
    });

    test('throws error when password is not a string', () => {
        assert.throws(
            () => checkPasswordAndThrowReason(123),
            { message: 'Password must be a string' }
        );
    });

    test('throws error when password is null', () => {
        assert.throws(
            () => checkPasswordAndThrowReason(null),
            { message: 'Password must be a string' }
        );
    });

    test('throws error when password is undefined', () => {
        assert.throws(
            () => checkPasswordAndThrowReason(undefined),
            { message: 'Password must be a string' }
        );
    });

    test('throws error when missing uppercase letter', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('abc123!'),
            { message: 'Password must contain an uppercase letter' }
        );
    });

    test('throws error when missing lowercase letter', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('ABC123!'),
            { message: 'Password must contain a lowercase letter' }
        );
    });

    test('throws error when missing digit', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('Abcdef!'),
            { message: 'Password must contain a digit' }
        );
    });

    test('throws error when missing special character', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('Abc123'),
            { message: 'Password must contain a special character' }
        );
    });

    test('throws error for empty string', () => {
        assert.throws(
            () => checkPasswordAndThrowReason(''),
            { message: 'Password must contain an uppercase letter' }
        );
    });
});

// Made with Bob
