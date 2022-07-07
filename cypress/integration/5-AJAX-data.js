/// <reference types="Cypress" />

describe('5 AJAX data', () => {
    it('', () => {
        cy.visit('http://uitestingplayground.com/ajax')
        cy.get('#ajaxButton').click()
        cy.get('.bg-success',{ timeout: 16000 }).contains('Data loaded with AJAX get request.')

        
    });
});
