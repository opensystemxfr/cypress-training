class ShippingStepPage {
    private CheckTerm: string;
    private BtnExecutePayment: string

    constructor() {
        this.CheckTerm = '#cgv';
        this.BtnExecutePayment = '.cart_navigation span'
    }

    public pressTerm(): void {
        cy.get(this.CheckTerm).click()
    }

    public makePayment(): void {
        cy.get(this.BtnExecutePayment).click()
    }
}

export { ShippingStepPage }
