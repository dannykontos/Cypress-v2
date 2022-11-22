/// <reference types="cypress" />
const newItem = 'Snowboards';
describe('add to cart', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
        cy.clearCookies();
        //cy.acceptCookiesTs();
        //cy.selectDefaultLanguageTs();
    })

    it('displays two todo items by default', () => {
        cy.searchCustomProductTs(newItem);
        cy.assertNumberOfItemsOnPageTs(18);
        cy.clickOnSpecificProductTs(2);
        cy.selectAvailableSizeTs();
        cy.clickAddToCartTs();
        cy.continueShoppingTs();
        cy.cartEqualsTs(1);
    })

    it.skip('can add new todo items', () => {
    })

    it.skip('can check off an item as completed', () => {
    })
})
