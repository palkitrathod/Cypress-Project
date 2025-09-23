// cypress/e2e/tracker_pom.cy.js
import LoginPage from '../pages/LoginPage'
import WalkPage from '../pages/WalkPage'

describe('Tracker - create walk (POM)', () => 
  {
  it('login and create walk using POM', () => 
    {
    // login
    LoginPage.login('steve_gates@nopCommerce.com', 'steve@123')

    // navigate & open create form
    WalkPage.openWalksMenu();
    WalkPage.clickCreate();

    // fill form
    WalkPage.selectAccount("Palkit's Account")
    WalkPage.selectTemplate("Palkit's Matrix")
    WalkPage.setDescription('Description 1')
    WalkPage.setReference('Reference 1')
    WalkPage.selectState('Alaska')
    WalkPage.selectBranch('branch2')

    // use dd-mm-yyyy (converted inside)
    WalkPage.setDates('2025-09-12', '2025-09-10')

    // upload (ensure file is in cypress/fixtures)
    WalkPage.uploadFileFromFixture('FINAL (2).xlsx')

    // submit
    WalkPage.submit();

    // simple assert — change to whatever success UI you have
    // If your app returns a server-side page with "We’re sorry..." on failure,
    // you can intercept the POST to inspect response (I can add that if needed).
    cy.contains('Walk created').should('be.visible'); 
  });
});

