// cypress/pages/WalksPage.js
class WalksPage {
  openWalksMenu() 
  {
    cy.get('.nav-pills > :nth-child(3) > .nav-link').click();
  }

  clickCreate() 
  {
    cy.get('.btn-primary').click();
  }

  selectAccount(accountName) 
  {
    cy.get('#select2-AccountId-container').click();
    cy.get('.select2-results__option', { timeout: 6000 }).contains(accountName).click();
    // verify visible label updated
    cy.get('#select2-AccountId-container').should('contain.text', accountName);
    cy.wait(3000)
  }

  selectTemplate(templateName) 
  {
    cy.get('#select2-TemplateTypeId-container').click();
    cy.get('.select2-results__option').contains(templateName).click();
  }

  setDescription(desc) 
  {
    cy.contains('Description').type(desc);
  }

  setReference(ref) 
  {
    cy.contains('Reference').type(ref);
  }

  selectState(stateName) 
  {
    cy.get('#select2-StateId-container').click();
    cy.get('.select2-results__option', { timeout: 6000 }).contains(stateName).click();
  }

  selectBranch(branchName) 
  {
    cy.get('#select2-BranchId-container').click();
    cy.get('.select2-results__option', { timeout: 6000 }).contains(branchName).click();
  }

  // accepts dates in dd-mm-yyyy and converts to yyyy-mm-dd for input[type=date]
  setDates(startIso, endIso) {
  cy.get('#StartDateUtc')
    .invoke('val', '') // clear safely for date inputs
    .type(startIso, { force: true })
    .should('have.value', startIso);

  cy.get('#EndDateUtc')
    .invoke('val', '') // clear safely
    .type(endIso, { force: true })
    .should('have.value', endIso);
}

  uploadFileFromFixture(fileName) 
  {
    cy.fixture(fileName).as('file');
    cy.get('input[type="file"]').selectFile('@file', { force: true });
  }

  submit() 
  {
    cy.get('[name="save"]').click();
  }
}

export default new WalksPage();
