export function checkPassword(password){
   
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
     if (!/\d/.test(password)) {
        return false;
    }
    if(!/[^a-zA-Z0-9]/.test(password)){
        return false;
    }
    return true;
}

export function checkPasswordAndThrowReason(password) {
    
    if(typeof password !== 'string') { 
        throw new Error('Password must be a string')
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
    if(!/[^a-zA-Z0-9]/.test(password)){
        throw new Error("Password must contain a special character");
    }
}