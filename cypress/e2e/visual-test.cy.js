/// <reference types="cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
    // need to scroll to handle lazy loading
    cy.scrollTo('bottom', { duration: 5000 });
    cy.scrollTo('top', { duration: 2000 });
  });

  it("looks good", () => {
    // inspect the caught error that comes from RocketLazyLoadScripts
    cy.on('uncaught:exception', (e) => {
      return false;
      // on any other error message the test fails
    })
    // Hadling dynamic content
    cy.happoHideDynamicElements({selectors: ['#scroll']});
    cy.get("body").happoScreenshot();
  });
});

Migrar todo para trabajar con Percy.io
https://docs.percy.io/docs/cypress

Ejemplos
https://github.com/percy/example-percy-cypress