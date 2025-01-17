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

        it("given null should return false", function() {
            const result = main.validatePasswordNumber(null);
            expect(result).toBe(false);
        });
        
        it("given password with number should return true", function() {
            const result = main.validatePasswordNumber("Abcd@1xyz");
            expect(result).toBe(true);
        });

        
    });

    describe("Password IPL validation", function() {
        it("given password with IPL in uppercase should return false", function() {
            const result = main.validatePasswordNoIPL("testIPL123!");
            expect(result).toBe(false);
        });
        it("given password with ipl in lowercase should return false", function() {
            const result = main.validatePasswordNoIPL("testipl123!");
            expect(result).toBe(false);
        });
        it("given password with IpL in mixed case should return false", function() {
            const result = main.validatePasswordNoIPL("testIpL123!");
            expect(result).toBe(false);
        });
        it("given valid password without IPL should return true", function() {
            const result = main.validatePasswordNoIPL("Test123!");
            expect(result).toBe(true);
        });
        it("given empty string should return false", function() {
            const result = main.validatePasswordNoIPL("");
            expect(result).toBe(false);
        });
        it("given null should return false", function() {
            const result = main.validatePasswordNoIPL(null);
            expect(result).toBe(false);
        });

    });
});