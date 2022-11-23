/// <reference types="cypress" />
describe('add to cart', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        cy.clearCookies();
        //cy.acceptCookiesTs();             // features are not available in the pipeline
        //cy.selectDefaultLanguageTs();     // features are not available in the pipeline
    })

    it('displays two todo items by default', () => {
        const newItem = 'Snowboards';
        cy.searchCustomProductTs(newItem);
        cy.assertNumberOfItemsOnPageTs(18);
        cy.clickOnSpecificProductTs(2);
        cy.selectAvailableSizeTs();
        cy.clickAddToCartTs();
        cy.continueShoppingTs();
        cy.cartEqualsTs(1);
    })

    it.skip('can add new todo items', () => {
        //TODO
    })

    it.skip('can check off an item as completed', () => {
        //TODO
    })
})
