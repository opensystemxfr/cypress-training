class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string

    constructor() {
        //this.tShirtMenu = '#block_top_menu > ul > li:nth-child(3) > a';
        this.tShirtMenu = '[class=sf-with-ul]'; //Proposal
        this.menuContentPageURL = 'http://automationpractice.com/'
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
       // cy.get(this.tShirtMenu).click()
        cy.get(this.tShirtMenu).eq(0).click(); //Proposal
    }

}

export { MenuContentPage }