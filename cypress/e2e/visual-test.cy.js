/// <reference types="cypress" />

describe('Visit Democart main page to validate Visual Testing', () => {
  it('Cypress-axe should log accessibility failures', () => {
      cy.visit('https://demo.opencart.com');
      cy.injectAxe();
      cy.checkA11y();
  });

  it('Visual Testing should exclude specific elements on the page', () => {
      cy.visit('https://demo.opencart.com');
      cy.injectAxe();
      cy.checkA11y({exclude: ['#content']});
  })
});