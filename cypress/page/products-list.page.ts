class ProductsListPage {
    private ProductList: string;
    private AddCart: string

    constructor() {
        this.ProductList = '.ajax_block_product';
        this.AddCart = '#center_column a.button.ajax_add_to_cart_button.btn.btn-default'
    }

    public lookProductList(): void {
        // cy.get(this.ProductList).click()
        cy.get(this.ProductList).eq(0).click(); //Proposal
    }

    public goToAddCart(): void {
        // cy.get(this.AddCart).click()
        cy.get(this.AddCart).eq(0).click(); //Proposal
    }
}

export { ProductsListPage }
