/// <reference types="Cypress" />


describe('15. Mouse Over', () => {
    it('should click twice', () => {
        cy.visit('http://uitestingplayground.com/mouseover')
        cy.get('.text-primary').click()
        cy.get('.text-warning').click()
        cy.get('#clickCount').should('have.text', '2')
    });
});