/// <reference types="Cypress" />

describe('1.DynamicID', () => {
    it('Use xpath for button identification', () => {
        cy.visit('http://uitestingplayground.com/dynamicid')
        cy.xpath("/html[1]/body[1]/section[1]/div[1]/button[1]").click()
    });
});