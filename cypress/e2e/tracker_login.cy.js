
it('login test', function() 
{
    cy.visit('https://tracker-dev-tenant3.suddath.com/')
    cy.contains('Email').type('steve_gates@nopCommerce.com')
    cy.contains('Password').type('steve@123')
    cy.contains('Log in').click()
    cy.get('.nav-pills > :nth-child(3) > .nav-link').click()
    cy.get('.btn-primary').click()

    //Walk Creation
    cy.get('#AccountId').select("Palkit's Account", { force: true }) //Dropdown 1
    cy.get('#TemplateTypeId').select("Palkit's Matrix", {force : true}) //Dropdown 2
    cy.contains('Description').type("Description 1") //Description 
    cy.contains('Reference').type('Reference 1')
    //Select States
    cy.get('#select2-StateId-container').click();
    cy.get('.select2-results__option').contains('Alaska').click();
    //Select Branch
    cy.get('#select2-BranchId-container').click();
    cy.get('.select2-results__option').contains('branch2').click();
    //Calendar Start Date
    //cy.get('#StartDateUtc').contains('13').click()
    cy.get('#StartDateUtc').click(270, 20, {force: true});
    //cy.get('#StartDateUtc').nextAll('span').click();
    cy.get('#EndDateUtc').click(270, 20, {force: true});

    



})