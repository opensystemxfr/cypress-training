class AddressStepPage {
    private BottonLogin: string;
    private CartNavigation: string

    constructor() {
        this.BottonLogin = '#SubmitLogin > span';
        this.CartNavigation = '.cart_navigation span'


    }

    public PressLogin(): void {
        cy.get(this.BottonLogin).click()
    }

    public PressNavigation(): void {
        cy.get(this.CartNavigation).click()
    }

}

export {AddressStepPage}