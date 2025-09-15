/// <reference types = "cypress" />

it('google test', function() //google test is title for the test and we have created a function with ()
{

    cy.visit("https://duckduckgo.com")
    cy.get('[name="q"]').type('automation testing{enter}')
    cy.contains('Images').click()
})