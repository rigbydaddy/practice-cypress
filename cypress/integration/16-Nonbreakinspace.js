/// <reference types="Cypress" />

describe('16.NBS', () => {
    it('Non breakin space to use XPath', () => {
        cy.visit('http://uitestingplayground.com/nbsp')
        cy.xpath(`//button[text()='My Button']`).click()
        
    });
});