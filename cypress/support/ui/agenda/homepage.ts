declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            searchBtn(): Chainable
            acceptCookiesBtn(): Chainable
            stayOnThisSiteBtn(): Chainable
            categoryNameText(): Chainable
            searchResultsArray(): Chainable
            productNameArray(): Chainable
            availableSize(): Chainable
            addToCartBtn(): Chainable
            continueShoppingBtn(): Chainable
            cartCountNumber(): Chainable
        }
    }
}

//Homepage
Cypress.Commands.add('searchBtn', () => {
    return cy.get('input[class~="search-input"]');
})
Cypress.Commands.add('acceptCookiesBtn', () => {
    return cy.get('button[id*="onetrust-accept-btn-handler');
})
Cypress.Commands.add('stayOnThisSiteBtn', () => {
    return cy.get('a[class~="stay-on-this-site"]');
})

//Category Page or Search Results Page
Cypress.Commands.add('categoryNameText', () => {
    return cy.get('h1[class~="name"]');
})
Cypress.Commands.add('searchResultsArray', () => {
    return cy.get('.product-page .product-image');
})
Cypress.Commands.add('productNameArray', () => {
    return cy.get('.product-page h2.product-name');
})
Cypress.Commands.add('availableSize', () => {
    return cy.get('.options-scroll-pane .swatch-link');
})
Cypress.Commands.add('addToCartBtn', () => {
    return cy.get('.product-controls-list button.add-to-cart-btn');
})
Cypress.Commands.add('continueShoppingBtn', () => {
    return cy.get('.btn-secondary');
})
Cypress.Commands.add('cartCountNumber', () => {
    return cy.get('.secondary-navigation .js-amount');
})
export default {};
