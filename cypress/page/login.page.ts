class LoginPage {
    private TypeEmail: string;
    private TypePass: string

    constructor() {
        this.TypeEmail = '#email';
        this.TypePass = '#passwd'
    }

    public Email(): void {
        cy.get(this.TypeEmail).type('aperdomobo@gmail.com')
    }

    public Pass(): void {
        cy.get(this.TypePass).type('WorkshopProtractor')
    }
}

export {LoginPage}
