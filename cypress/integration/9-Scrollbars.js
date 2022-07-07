/// <reference types="Cypress" />

describe('9. Scrollbars', () => {
    it('should ensure that an element is visible on screen and this may require scrolling.', () => {
        cy.visit('http://uitestingplayground.com/scrollbars')
        cy.get('.btn-primary').scrollIntoView()
        
    });
});
