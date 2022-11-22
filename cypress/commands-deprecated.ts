Cypress.Commands.add('generateToken', generateToken);
function generateToken({ secret }): void {
    cy.get('button[id*="onetrust-accept-btn-handler"').should('have.length', 1);
    cy.get('button[id*="onetrust-accept-btn-handler"').click();
    cy.get('span[class~="country-title"]').first().should('have.text', 'United States');
    cy.get('a[class~="stay-on-this-site"]').first().click();
}

// this is another example.
Cypress.Commands.add('login', loggin);
function loggin(username: string, password: string): void {
    cy.visit(Cypress.env('/'))
}

declare namespace Cypress {
    interface Chainable<Subject> {
        generateToken(secret): void;
        /**
         * This will log user in
         * @param email string
         * @param password string
         */
        login(email: string, password: string): void;
    }
}