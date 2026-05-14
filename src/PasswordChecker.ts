export function checkPassword(password: string): boolean {
    if (password.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
     if (!/\d/.test(password)) {
        return false;
    }
    // password should not contain the ! character
    if(/!/.test(password)){
        return false;
    }
    if(!/[^a-zA-Z0-9]/.test(password)){
        return false;
    }
    
    return true;
}

export function checkPasswordAndThrowReason(password: string): void {
    if(typeof password !== 'string') {
        throw new Error('Password must be a string')
    }
    if(password.length < 8) {
        throw new Error("Password must be at least 8 characters long");
    }
    if(!/[A-Z]/.test(password)){
        throw new Error("Password must contain an uppercase letter");
    }
    if(!/[a-z]/.test(password)){
        throw new Error("Password must contain a lowercase letter");
    }
    if(!/\d/.test(password)){
        throw new Error("Password must contain a digit");
    }
    // password should not contain the ! character
    if(/!/.test(password)){
        throw new Error("Password must not contain the ! character");
    }
    if(!/[^a-zA-Z0-9]/.test(password)){
        throw new Error("Password must contain a special character");
    }
}

// Made with Bob
