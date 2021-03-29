class ShippingStepPage {
    private CheckTerm: string;
    private CartNavigation: string

    constructor() {
        this.CheckTerm = '#cgv';
        this.CartNavigation = '.cart_navigation span'
    

    }

    public PressTerm(): void {
        cy.get(this.CheckTerm).click()
    }

    public PressNavigation(): void {
        cy.get(this.CartNavigation).click()
    }

}

export {ShippingStepPage}