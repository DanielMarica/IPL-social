import { Main } from '../src/passwordChecker.js';

describe("Password validation tests", function() {
    const main = new Main();
    
    describe("Password length validation", function() {
        it("given password with length 7 should return false", function() {
            const result = main.validatePasswordLength("Ab12xyz");
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

        it("given password with length 8 should return true", function() {
            const result = main.validatePasswordLength("Abcd1234");
            expect(result).toBe(true);
        });
    });

    describe("Password special character validation", function() {
        it("given password without special char should return false", function() {
            const result = main.validatePasswordSpecialChar("Abcd1234");
            expect(result).toBe(false);
        });
        
        it("given empty string should return false", function() {
            const result = main.validatePasswordSpecialChar("");
            expect(result).toBe(false);
        });
        it("given null should return false", function() {
            const result = main.validatePasswordSpecialChar(null);
            expect(result).toBe(false);
        });
        it("given password with special char should return true", function() {
            const result = main.validatePasswordSpecialChar("abc@123ABC");
            expect(result).toBe(true);
        });
    });

    describe("Password number validation", function() {
        it("given password without number should return false", function() {
            const result = main.validatePasswordNumber("Abcd@xyz");
            expect(result).toBe(false);
        });
        
        it("given empty string should return false", function() {
            const result = main.validatePasswordNumber("");
            expect(result).toBe(false);
        });

        
    });
});