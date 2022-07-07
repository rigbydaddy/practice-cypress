/// <reference types="Cypress" />

describe('13. Visible', () => {
    it('should verify if elements are visible', () => {
        cy.visit('http://uitestingplayground.com/visibility')
        cy.get('.btn-primary').click()
        cy.get('#overlappedButton').should('be.visible')
        cy.get('#offscreenButton').should('be.visible')
        cy.get('#invisibleButton').should('not.be.visible')
        cy.get('#notdisplayedButton').should('not.be.visible')
        cy.get('#transparentButton').should('not.be.visible')
        cy.get('#zeroWidthButton').should('not.be.visible')
        cy.get('#removedButton').should('not.exist')
    });
});