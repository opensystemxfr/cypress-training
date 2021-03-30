class PaymentStepPage {
    private BtBankWire: string;
    private BtnExecutePayment: string
    private CenterColumn: string

    constructor() {
        this.BtBankWire = '.bankwire';
        this.BtnExecutePayment = '#cart_navigation > button'
        this.CenterColumn = '.cheque-indent > .dark'
    }

    public pressBankWire(): void {
        cy.get(this.BtBankWire).click()
    }

    public makePayment(): void {
        cy.get(this.BtnExecutePayment).click()
    }

    public checkMessage(paymentmessage: string): void {
        cy.get(this.CenterColumn).should('have.text', paymentmessage)
    }
}

export { PaymentStepPage }
