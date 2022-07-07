/// <reference types="Cypress" />

describe('3. Hidden Layers', () => {
    it('veryfy that the button cannot be clicked twice', () => {
        cy.visit('http://uitestingplayground.com/hiddenlayers')
        cy.get('#greenButton').click()
        // Uncomment the line below before
        // cy.get('#greenButton').click()
    });
});