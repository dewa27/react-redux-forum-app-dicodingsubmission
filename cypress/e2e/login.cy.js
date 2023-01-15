/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */
describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('should display login page correctly', () => {
    cy.get('#signInEmail').should('be.visible');
    cy.get('#signInPassword').should('be.visible');
    cy.get('button').contains(/^Sign In$/).should('be.visible');
  });
  it('should display alert when email is empty', () => {
    cy.get('button').contains(/^Sign In$/).click();
    cy.contains('.toast', '"email" is not allowed to be empty');
  });
  it('should display alert when password is empty', () => {
    cy.get('#signInEmail').type('test123@gmail.com');
    cy.get('button').contains(/^Sign In$/).click();
    cy.contains('.toast', '"password" is not allowed to be empty');
  });
  it('should display alert when email and password are wrong', () => {
    cy.get('#signInEmail').type('test123@gmail.com');
    cy.get('#signInPassword').type('test222');
    cy.get('button').contains(/^Sign In$/).click();
    cy.contains('.toast', 'email or password is wrong');
  });
  it('should display homepage when email and password are correct', () => {
    cy.get('#signInEmail').type('budhi@gmail.com');
    cy.get('#signInPassword').type('budhi123');
    cy.get('button').contains(/^Sign In$/).click();
    cy.contains('.section-title', 'Create Your Thread');
  });
});
