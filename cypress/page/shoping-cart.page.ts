class ShopingCartPage {
    private ShopingCart: string;
    private CartNavigation: string

    constructor() {
        this.ShopingCart = '[style*="display: block;"] .button-container > a';
        this.CartNavigation = '.cart_navigation span'
    }


    public lookShopingCart(): void {
        cy.get(this.ShopingCart).click()
    }

    public makePayment(): void {
        cy.get(this.CartNavigation).click()
    }
}
export { ShopingCartPage }
