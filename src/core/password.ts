export class Password {

    constructor() {}

    public isValid(password: string): boolean {
        if(!!!password || this.isUnderSix(password)) return false

        return true;
    }

    private isUnderSix(password: string): boolean {
        return password.length <= 6
    }
}
