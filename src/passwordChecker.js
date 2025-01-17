export class Main {
    validatePasswordLength(password) {
        if (!password || typeof password !== 'string') {
            return false;
        }
        return password.length >= 8;
    }
}