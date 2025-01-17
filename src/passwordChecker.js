export class Main {
    
    validatePasswordLength(password) {
        if (!password || typeof password !== 'string') {
            return false;
        }
        return password.length >= 8;
    }

    validatePasswordSpecialChar(password) {
        if (!password || typeof password !== 'string') {
            return false;
        }
        const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/;
        return specialChars.test(password);
    }

    validatePasswordNumber(password) {
        if (!password || typeof password !== 'string') {
            return false;
        }
        const hasNumber = /\d/;
        return hasNumber.test(password);
    }
}