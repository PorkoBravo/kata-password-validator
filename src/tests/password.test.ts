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

	it("is under six characters", ()=> {
		expect(password.isValid("asfgg")).toBe(false)
	})

	it("not contains at least one number", ()=>{
		expect(password.isValid("asfgg")).toBe(false)
	})
})

describe("Password validator should validate a password that", ()=> {
	it("is six or more characters length", ()=> {
		expect(password.isValid("qwerty")).toBe(true)
		expect(password.isValid("qwertyu")).toBe(true)
	})
})


