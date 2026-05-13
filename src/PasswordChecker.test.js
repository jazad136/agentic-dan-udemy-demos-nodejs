import { test, describe } from 'node:test';
import assert from 'node:assert';
import { checkPassword, checkPasswordAndThrowReason } from './PasswordChecker.js';

describe('checkPassword', () => {
    
    test('returns false when fewer than 8 characters', () => { 
        assert.strictEqual(checkPassword('Abc12@'), false);
    })

    test('returns true for valid password with all requirements', () => {
        assert.strictEqual(checkPassword('Abc12345@'), true);
    });

    test('returns true for complex valid password', () => {
        assert.strictEqual(checkPassword('MyP@ssw0rd'), true);
    });

    test('returns false when missing uppercase letter', () => {
        assert.strictEqual(checkPassword('abc12312@'), false);
    });

    test('returns false when missing lowercase letter', () => {
        assert.strictEqual(checkPassword('ABC12345@'), false);
    });

    test('returns false when missing digit', () => {
        assert.strictEqual(checkPassword('Abcdefgh@'), false);
    });

    test('returns false when missing special character', () => {
        assert.strictEqual(checkPassword('Abc123ab'), false);
    });

    test('returns false for empty string', () => {
        assert.strictEqual(checkPassword(''), false);
    });

    test('returns false when missing multiple requirements', () => {
        assert.strictEqual(checkPassword('abc'), false);
    });

    test('returns false when password contains a \'!\' character', () => {
        assert.strictEqual(checkPassword('Abc123!@'), false);
    });
});

describe('checkPasswordAndThrowReason', () => {
    test('does not throw for valid password with all requirements', () => {
        assert.doesNotThrow(() => {
            checkPasswordAndThrowReason('Abc12345@');
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

    test('throws error when password is fewer than 8 characters', () => { 
        assert.throws(
            () => checkPasswordAndThrowReason('short@'),
            { message: 'Password must be at least 8 characters long' }
        );
    })
    test('throws error when missing uppercase letter', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('abc123ab@'),
            { message: 'Password must contain an uppercase letter' }
        );
    });

    test('throws error when missing lowercase letter', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('ABC123AB@'),
            { message: 'Password must contain a lowercase letter' }
        );
    });

    test('throws error when missing digit', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('Abcdefgh@'),
            { message: 'Password must contain a digit' }
        );
    });

    test('throws error when missing special character', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('Abc123abc'),
            { message: 'Password must contain a special character' }
        );
    });

    test('throws error for empty string', () => {
        assert.throws(
            () => checkPasswordAndThrowReason(''),
            { message: 'Password must be at least 8 characters long' }
        );
    });

    test('throws error when password contains a \'!\' character', () => {
        assert.throws(
            () => checkPasswordAndThrowReason('Abc1234!@'),
            { message: 'Password must not contain the ! character' }
        );
    });
});

// Made with Bob
