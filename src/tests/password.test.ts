import { Password } from '../core/password'; // Replace './password' with the correct path to your file


describe("Password validator should", () => {
	it("be ready to start", () => {
		const validator: Password = new Password()
		expect(validator.echo()).toBe(true)
	})
})