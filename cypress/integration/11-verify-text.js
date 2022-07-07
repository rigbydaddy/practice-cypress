/// <reference types="Cypress" />

describe('11. Verify text', () => {
    it('should find an element with Welcome... text.', () => {
        cy.visit('http://uitestingplayground.com/verifytext')
        cy.get('.bg-primary > .badge-secondary').contains('Welcome')
    });
});