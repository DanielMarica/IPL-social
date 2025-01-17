import { Main } from '../src/passwordChecker.js';

describe("Password validation tests", function() {
    const main = new Main();
    
    describe("Password length validation", function() {
        it("given password with length 7 should return false", function() {
            const result = main.validatePasswordLength("1234567");
            expect(result).toBe(false);
        });

        it("given empty string should return false", function() {
            const result = main.validatePasswordLength("");
            expect(result).toBe(false);
        });

        it("given null should return false", function() {
            const result = main.validatePasswordLength(null);
            expect(result).toBe(false);
        });

    });
});