/// <reference types="Cypress" />

describe('2 Class attribute', () => {
    it('Identify blue button', () => {
        cy.visit('http://uitestingplayground.com/classattr')
        cy.get('.btn-primary').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Primary button pressed')
        })        
    });
});