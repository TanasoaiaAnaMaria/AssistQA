describe("Open", function(){
    it("open",function() {
        cy.visit('https://assist-devqa.netlify.app')
        cy.title().should('eq','BIM')
        cy.location('protocol').should('eq','https:')
        
    })
})