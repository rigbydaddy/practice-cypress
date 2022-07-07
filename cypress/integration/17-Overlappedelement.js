/// <reference types="Cypress" />

describe('17 overlapped element', () => {
    it('make sure that the text was entered correctly.', () => {
        cy.visit('http://uitestingplayground.com/overlapped')
        cy.get('div > #name').scrollIntoView().type('Alfresno')
    });
});