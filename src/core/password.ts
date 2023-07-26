export class Password {

    private readonly MINIMUM_LENGTH: number = 6


    private readonly oneNumber: RegExp = /\d/;
    private readonly uppercaseLetter: RegExp = /[A-Z]/;
    private readonly lowercaseLetter: RegExp = /[a-z]/;
    private readonly underscore: RegExp = /_/;

    constructor() {}

    public isValid(password: string): boolean {
        if(!!!password 
            || this.isUnderMinimumLength(password)
            || !this.matchExpression(password)) return false

        return true;
    }

    private isUnderMinimumLength(password: string): boolean {
        return password.length < this.MINIMUM_LENGTH
    }

    private matchExpression(password: string): boolean {
        if(this.oneNumber.test(password) 
            && this.uppercaseLetter.test(password) 
            && this.underscore.test(password)
            && this.lowercaseLetter.test(password))
            return true
        return false
    }
}
