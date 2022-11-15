// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { cy.visit('https://burton.com') })
Cypress.Commands.add('acceptCookies', () => {
    cy.get('button[id*="onetrust-accept-btn-handler"').should('have.length', 1);
    cy.get('button[id*="onetrust-accept-btn-handler"').click();

})
Cypress.Commands.add('selectDefaultLanguage', () => {
    cy.get('span[class~="country-title"]').first().should('have.text', 'United States');
    cy.get('a[class~="stay-on-this-site"]').first().click();
})
Cypress.Commands.add('searchCustomProduct', (keyword) => {
    cy.get('input[class~="search-input"]').type(`${keyword}{enter}`);
    cy.get('h1[class~="name"]').should('have.text', `${keyword}`);
})
Cypress.Commands.add('assertNumberOfItemsOnPage', (numberOfItems) => {
    cy.get('.product-page .product-image')
        .should('have.length', numberOfItems)
})
Cypress.Commands.add('clickOnSpecificProduct', (numberOfItems) => {
    cy.get('.product-page h2.product-name').eq(4).click()
})
Cypress.Commands.add('selectAvailableSize', () => {
    cy.get('.options-scroll-pane .swatch-link').eq(1).click()
})
Cypress.Commands.add('clickAddToCart', () => {
    cy.get('.product-controls-list button.add-to-cart-btn').click()
})
Cypress.Commands.add('continueShopping', () => {
    cy.get('.btn-secondary').click()
})
Cypress.Commands.add('cartEquals', (numberOfItems) => {
    cy.get('.secondary-navigation .js-amount').should('have.text', `${numberOfItems}`);
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })