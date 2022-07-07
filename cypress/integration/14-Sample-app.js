/// <reference types="Cypress" />

describe('14 Sample App', () => {
    it('should successfully login the user', () => {
        cy.visit('http://uitestingplayground.com/sampleapp')
        cy.get('div:nth-child(4) > div:nth-child(1) > input:nth-child(1)')
        .type('asd')
        cy.get(' div:nth-child(5) > div:nth-child(1) > input:nth-child(1)').type('pwd')
        cy.get('.btn-primary').click()

    });
});