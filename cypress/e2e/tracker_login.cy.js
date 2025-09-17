import 'cypress-file-upload';

it('login test and file upload', function() {
  cy.visit('https://tracker-dev-tenant3.suddath.com/')
  cy.contains('Email').type('steve_gates@nopCommerce.com')
  cy.contains('Password').type('steve@123')
  cy.contains('Log in').click()
  cy.get('.nav-pills > :nth-child(3) > .nav-link').click()
  cy.get('.btn-primary').click()

  // Walk Creation
  cy.get('#select2-AccountId-container').click()
  cy.get('.select2-results__option').contains("Palkit's Account").click();
  cy.wait(3000)
  //cy.get('#AccountId').select("Palkit's Account", { force: true })
  //cy.get('#TemplateTypeId').select("Palkit's Matrix", { force: true })
  cy.get('#select2-TemplateTypeId-container').click()
  cy.get('.select2-results__option').contains("Palkit's Matrix").click()
  cy.contains('Description').type("Description 1")
  cy.contains('Reference').type('Reference 1')

  // Select States
  cy.get('#select2-StateId-container').click();
  cy.get('.select2-results__option').contains('Alaska').click();

  // Select Branch
  cy.get('#select2-BranchId-container').click();
  cy.get('.select2-results__option').contains('branch2').click();

  // Calendar Start Date / End Date
  cy.get('#StartDateUtc').clear().type('2025-09-17');  
  cy.get('#EndDateUtc').clear().type('2025-09-19');


  // Upload File
  cy.fixture('FINAL (2).xlsx').as('file');   // file must be inside cypress/fixtures
  cy.get('input[type="file"]').selectFile('@file');  

  //Submit the form
  cy.get('[name="save"]').click()
  cy.wait(5000)


});
