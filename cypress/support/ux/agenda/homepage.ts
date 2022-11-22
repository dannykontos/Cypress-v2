declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            searchCustomProductTs(keyboard: string): Chainable
            acceptCookiesTs(): Chainable
            selectDefaultLanguageTs(): Chainable
            assertNumberOfItemsOnPageTs(numberOfItems: number): Chainable
            clickOnSpecificProductTs(itemNumber: number): Chainable
            selectAvailableSizeTs(): Chainable
            clickAddToCartTs(): Chainable
            continueShoppingTs(): Chainable
            cartEqualsTs(numberOfItems: number): Chainable
        }
    }
}
Cypress.Commands.add('searchCustomProductTs', (keyword: string) => {
    cy.searchBtn().type(`${keyword}{enter}`);
    cy.categoryNameText().should('have.text', `${keyword}`);
})
Cypress.Commands.add('acceptCookiesTs', () => {
    cy.acceptCookiesBtn().should('have.length', 1);
    cy.acceptCookiesBtn().click();
})
Cypress.Commands.add('selectDefaultLanguageTs', () => {
    cy.stayOnThisSiteBtn().first().click({force: true});
})

Cypress.Commands.add('assertNumberOfItemsOnPageTs', (numberOfItems) => {
    cy.searchResultsArray().should('have.length', numberOfItems)
})
Cypress.Commands.add('clickOnSpecificProductTs', (itemNumber) => {
    cy.productNameArray().eq(itemNumber).click()
})
Cypress.Commands.add('selectAvailableSizeTs', () => {
    cy.availableSize().eq(1).click()
})
Cypress.Commands.add('clickAddToCartTs', () => {
    cy.addToCartBtn().click()
})
Cypress.Commands.add('continueShoppingTs', () => {
    cy.continueShoppingBtn().click()
})
Cypress.Commands.add('cartEqualsTs', (numberOfItems) => {
    cy.cartCountNumber().should('have.text', `${numberOfItems}`);
})
export default {};
