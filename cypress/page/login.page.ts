class LoginPage {
    private TypeEmail: string;
    private TypePass: string

    constructor() {
        this.TypeEmail = '#email';
        this.TypePass = '#passwd'
    }

    public email(): void {
        cy.get(this.TypeEmail).type('aperdomobo@gmail.com')
    }

    public pass(): void {
        cy.get(this.TypePass).type('WorkshopProtractor')
    }
}

export {LoginPage}
