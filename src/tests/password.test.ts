import { Password } from '../core/password';

let password: Password;

beforeEach(() => {
	password = new Password()
  });

describe("Password validator should", () => {
	it("not validate null or empty passwords", () => {
		expect(password.isValid(null as unknown as string)).toBe(false)
		expect(password.isValid("")).toBe(false)
	})

	it("not validate a password that is under six characters", ()=> {
		expect(password.isValid("asfgg")).toBe(false)
	})

	it("validate a password with six or more characters", ()=> {
		expect(password.isValid("qwerty")).toBe(true)
		expect(password.isValid("qwertyu")).toBe(true)
	})
})