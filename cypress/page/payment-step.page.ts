class PaymentStepPage {
    private BtBankWire: string;
    private CartNavigation: string
    private CenterColumn: string

    constructor() {
        this.BtBankWire = '.bankwire';
        this.CartNavigation = '.cart_navigation span'
        this.CenterColumn = '#center_column > div > p > strong'


    }

    public PressBankWire(): void {
        cy.get(this.BtBankWire).click()
    }

    public PressNavigation(): void {
        cy.get(this.CartNavigation).click()
    }


    public CheckMessage(): void {
        cy.get(this.CenterColumn).should('have.text', 'Your order on My Store is complete.')
    }


}

export { PaymentStepPage }