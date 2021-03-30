class PaymentStepPage {
    private BtBankWire: string;
    private BtnExecutePayment: string
    private CenterColumn: string

    constructor() {
        this.BtBankWire = '.bankwire';
        this.BtnExecutePayment = '.button btn btn-default button-medium'
        this.CenterColumn = '.cheque-indent'
    }

    public PressBankWire(): void {
        cy.get(this.BtBankWire).click()
    }

    public MakePayment(): void {
        cy.get(this.BtnExecutePayment).click()
    }

    public CheckMessage(): void {
        cy.get(this.CenterColumn).should('have.text', 'Your order on My Store is complete.')
    }
}

export { PaymentStepPage }
