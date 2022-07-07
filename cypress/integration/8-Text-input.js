/// <reference types="Cypress" />

describe('8. Text input', () => {
    it('Should make sure that the button name is changing', () => {
        cy.visit('http://uitestingplayground.com/textinput')
        cy.get('.form-control').type('Alfredo')
        cy.get('.btn-primary').click()
    });
});