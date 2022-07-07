/// <reference types="Cypress" />


describe('', () => {
    it('', () => {
        cy.visit('http://uitestingplayground.com/')
        cy.get(`a[href='/loaddelay']`).click()
        cy.get('.btn-primary').click()
    });
});