/**
 * - Register spec
 *   - should display register page correctly
 *   - should display toast when name is empty
 *   - should display toast when email is empty
 *   - should display toast when password is empty
 *   - should display toast when email and password are wrong
 *   - should display toast with success message when name, email and password are correct
 *   - should display toast with error message when email has already taken
 */
describe('Register spec', () => {
  const name = 'Dewa';
  const email = `${(Math.random() + 1).toString(36).substring(7)}@gmail.com`;
  const password = (Math.random() + 1).toString(36).substring(2);
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('#signUp').contains(/^Sign Up$/).click();
  });
  it('should display register page correctly', () => {
    cy.get('#signUpName').should('be.visible');
    cy.get('#signUpEmail').should('be.visible');
    cy.get('#signUpPassword').should('be.visible');
    cy.get('button').contains(/^Sign In$/).should('be.visible');
  });
  it('should display toast when name is empty', () => {
    cy.get('button').contains(/^Sign Up$/).click();
    cy.contains('.toast', '"name" is not allowed to be empty');
  });
  it('should display toast when email is empty', () => {
    cy.get('#signUpName').type(name);
    cy.get('button').contains(/^Sign Up$/).click();
    cy.contains('.toast', '"email" is not allowed to be empty');
  });
  it('should display toast when password is empty', () => {
    cy.get('#signUpName').type(name);
    cy.get('#signUpEmail').type(email);
    cy.get('button').contains(/^Sign Up$/).click();
    cy.contains('.toast', '"password" is not allowed to be empty');
  });
  it('should display toast with success message when name, email and password are correct', () => {
    cy.get('#signUpName').type(name);
    cy.get('#signUpEmail').type(email);
    cy.get('#signUpPassword').type(password);
    cy.get('button').contains(/^Sign Up$/).click();
    cy.contains('.toast', 'Your account has successfuly created !');
  });
  it('should display toast with error message when email has already taken', () => {
    cy.get('#signUpName').type(name);
    cy.get('#signUpEmail').type(email);
    cy.get('#signUpPassword').type(password);
    cy.get('button').contains(/^Sign Up$/).click();
    cy.contains('.toast', 'email is already taken');
  });
});
