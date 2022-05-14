describe("ApplyNew" , function(){
    before('logIN',function(){
        cy.LogIN()
    })

    it("applyNew",function(){
        cy.get('.logged-menu').should('be.visible').click()
        cy.get('.dropdown-child').contains('My submission').click()
        cy.contains("You haven't applied yet").should('be.visible')
        cy.get('.buttons').find('.btn').eq(0).should('have.text','Apply Now')
        cy.get('.btn').click()
        cy.contains("BEST INNOVATIVE MINDS 2021").should('be.visible')
        cy.contains("Submit Project").should('be.visible')
        cy.get('.submit-name').find('.submit-input-description').eq(0).should('have.text','Project Name*')
        cy.get('.submit-name').find('.submit-input-description').eq(1).should('have.text','Team Name*')
        cy.get('.describing-project').find('.submit-input-description').eq(0).should('have.text','Describe project*')
        cy.get('.team-member').find('.submit-input-description').eq(0).should('have.text','Team Member Name*')
        cy.get('.button-submit-project').find('.submit-btn').eq(0).should('have.text','Submit Project')
        cy.get('.drag-zone').find('.add-title').eq(0).should('have.text','Add files')

       
        
    })
})