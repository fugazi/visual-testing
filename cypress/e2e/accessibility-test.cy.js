/// <reference types="cypress" />

/**
 * This test suite audits Accessibility on different pages of a website using Cypress.
 * Visits the main page of a demo e-commerce website and performs visual testing and accessibility checks using Cypress and Cypress-axe.
 */
describe("Visit Democart main page to validate Visual Testing ", () => {
  it("Cypress-axe should log accessibility failures", () => {
    cy.visit("https://www.google.com");
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Visual Testing should exclude specific elements on the page ", () => {
    cy.visit("https://www.google.com");
    cy.injectAxe();
    cy.checkA11y({ exclude: ["#content"] });
  });
});
