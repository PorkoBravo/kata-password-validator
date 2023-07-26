import { Password } from '../core/password';

let password: Password;

beforeEach(() => {
	password = new Password()
});

describe("Password validator should NOT validate a password that", () => {
	it("is null or empty", () => {
		expect(password.isValid(null as unknown as string)).toBe(false)
		expect(password.isValid("")).toBe(false)
	})

	it("is under six characters, but contains one number, one uppercase and one underscore", () => {
		expect(password.isValid("Fo_r1")).toBe(false)
	})

	it("not contains at least one number, but is above six characters, contains uppercase and lowercase and underscore", () => {
		expect(password.isValid("notNumber_")).toBe(false)
	})

	it("not contains at least one uppercase letter, but is above six characters, contains number and a underscore", () => {
		expect(password.isValid("1sixs_xx")).toBe(false)
	})
	
	it("not contains at least one lowercase letter, but is above six characters, contains number and a underscore", () => {
		expect(password.isValid("1SGSDGSDFGSS_")).toBe(false)
	})
})

describe("Password validator should validate a password that", () => {
	it("is six or more characters length, contains one number, one uppercase letter and one underscore and at least one lowercase letter", () => {
		expect(password.isValid("1siiX_")).toBe(true)
		expect(password.isValid("1six_sixX")).toBe(true)
	})
})


