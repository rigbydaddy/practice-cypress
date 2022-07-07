/// <reference types="Cypress" />


describe('7 Click', () => {
    it('should make sure that it is able to click the button.', () => {
        cy.visit('http://uitestingplayground.com/click')
        cy.get('.btn-primary').click()
    });
});