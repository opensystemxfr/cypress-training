class ShippingStepPage {
    private CheckTerm: string;
    private BtnExecutePayment: string

    constructor() {
        this.CheckTerm = '#cgv';
        this.BtnExecutePayment = '.cart_navigation span'
    }

    public PressTerm(): void {
        cy.get(this.CheckTerm).click()
    }

    public MakePayment(): void {
        cy.get(this.BtnExecutePayment).click()
    }
}

export { ShippingStepPage }
