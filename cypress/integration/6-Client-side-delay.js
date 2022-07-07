/// <reference types="Cypress" />

describe('06. Client side delay', () => {
    it(' should be able to wait for an element to show up.', () => {
        cy.visit('http://uitestingplayground.com/clientdelay')
        cy.get('.btn-primary').click()
        cy.get('.bg-success',{timeout: 16000}).should('have.text', 'Data calculated on the client side.')
        
    });
});