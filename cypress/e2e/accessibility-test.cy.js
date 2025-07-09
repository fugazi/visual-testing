/// <reference types="cypress" />

/**
 * This test suite audits Accessibility on different pages of a website using Cypress.
 * Visits the main page of a demo e-commerce website and performs visual testing and accessibility checks using Cypress and Cypress-axe.
 */
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

describe("Visit Democart main page to validate Visual Testing ", () => {
    beforeEach(() => {
    cy.visit("https://www.monofonicos.net");
    cy.injectAxe();
  });

  it("Cypress-axe should log accessibility failures", () => {
    cy.checkA11y(null, null, terminalLog);
  });

    it("Visual Testing should exclude specific elements on the page ", () => {
    cy.checkA11y({ exclude: ["#content"] }, null, terminalLog);
  });
});