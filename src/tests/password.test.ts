import { Password } from '../core/password';

describe("Password validator should", () => {
	it("not validate null or empty passwords", () => {
		const password: Password = new Password()

		expect(password.isValid(null as unknown as string)).toBe(false)
		expect(password.isValid("")).toBe(false)
	})
})