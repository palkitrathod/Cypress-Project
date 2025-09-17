// cypress/pages/LoginPage.js

class LoginPage 
{
  visit() 
  {
    cy.visit('https://tracker-dev-tenant3.suddath.com/');
  }

  fillEmail(email) 
  {
    cy.get('input[name="Email"]').clear().type(email);
  }

  fillPassword(password) 
  {
    cy.get('input[name="Password"]').clear().type(password);
  }

  submit() 
  {
    cy.contains('Log in').click();
  }

  login(email, password) 
  {
    this.visit();
    this.fillEmail(email);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
