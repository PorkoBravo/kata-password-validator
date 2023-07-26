export class Password {

    readonly MINIMUM_LENGTH: number = 6

    constructor() {}

    public isValid(password: string): boolean {
        if(!!!password 
            || this.isUnderMinimumLength(password)
            || !this.containsNumber(password)) return false

        return true;
    }

    private isUnderMinimumLength(password: string): boolean {
        return password.length < this.MINIMUM_LENGTH
    }

    private containsNumber(password: string): boolean {
        const match = password.match(/\d+/g)
 
        if(match) return true
        else return false
    }
}
