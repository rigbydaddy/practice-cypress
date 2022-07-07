/// <reference types="Cypress" />

describe('18 Shadow Dom', () => {
    it('should assert copied and generated text', () => {
        cy.visit('http://uitestingplayground.com/shadowdom')
        cy.get('div > guid-generator').shadow().find('.button-generate').click()
        cy.get('div > guid-generator').shadow().find('#editField').invoke('val').as('inputValue')
        cy.get('div > guid-generator').shadow().find('#editField').invoke('val').as('inputValue2')
        cy.log('||||||||||||')
        cy.log('||||||||||||')
        cy.log('||||||||||||')
        

        // cy.get('div > guid-generator').shadow().find('#buttonCopy').click()
        // .invoke('val').as('val2')

        cy.get('@inputValue').then((inputValue)=>{
          cy.get('@inputValue2').then((inputValue2)=>{
            expect(inputValue).to.eq(inputValue2)
          })

        })

        // cy.get('@new_counts').then((new_counts) => {
        //     expect(new_counts).to.eq(counts)
        //   })
        

    });
});