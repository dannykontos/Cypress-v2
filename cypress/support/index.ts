import '../commands'
//
// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<Element>
      acceptCookies(): Chainable<Element>
      selectDefaultLanguage(): Chainable<Element>
      searchCustomProduct(keyword: String): Chainable<Element>
      assertNumberOfItemsOnPage(itemsNumber: Number): Chainable<Element>
      clickOnSpecificProduct(itemsNumber: Number): Chainable<Element>
      clickAddToCart(): Chainable<Element>
      selectAvailableSize(): Chainable<Element>
      continueShopping(): Chainable<Element>
      cartEquals(itemNuber: Number): Chainable<Element>
    }
  }
}
