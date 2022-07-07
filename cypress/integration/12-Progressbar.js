/// <reference types="Cypress" />

describe('12. Progressbar', () => {
    it('Should wait for the progress bar to reach 75%.', () => {
        cy.visit('http://uitestingplayground.com/progressbar')
        cy.get('#startButton').click()

        cy.get('#progressBar',{timeout:30000}).should('have.text', '75%')

        
        cy.get('#stopButton').click()
    });
});
