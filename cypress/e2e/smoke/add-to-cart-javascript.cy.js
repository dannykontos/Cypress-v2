/// <reference types="cypress" />

describe('add to cart', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        cy.clearCookies();
        //cy.acceptCookies();           // features are not available in the pipeline
        //cy.selectDefaultLanguage();   // features are not available in the pipeline
    })

    it('displays two todo items by default', () => {
        const newItem = 'Snowboards';
        cy.searchCustomProduct(newItem);
        cy.assertNumberOfItemsOnPage(18);
        cy.clickOnSpecificProduct(2);
        cy.selectAvailableSize();
        cy.clickAddToCart();
        cy.continueShopping();
        cy.cartEquals(1);
    })

    it.skip('can add new todo items', () => {
        //TODO
    })

    it.skip('can check off an item as completed', () => {
        //TODO
    })
})
