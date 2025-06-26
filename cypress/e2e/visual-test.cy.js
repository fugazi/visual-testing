/// <reference types="cypress" />



describe("Performing Visual Regression Test to validate Visual Testing", () => {
  it("Open DemoCart page should match the snapshot", () => {
    cy.visit("https://www.monofonicos.net");
    cy.matchImageSnapshot();
  });

  it("Header and Banner should match the snapshot", () => {
    cy.visit("https://www.monofonicos.net");

    // Option 1: Capture only the header and banner elements
    cy.get("header").matchImageSnapshot("header");
    cy.get(".main-banner").matchImageSnapshot("mainBanner");

    // Option 2: Capture a specific area of the page containing header and banner
    cy.get("body").then(($body) => {
      const headerAndBanner = $body.find("header, .main-banner");
      cy.wrap(headerAndBanner).matchImageSnapshot("headerAndBanner");
    });
  });
});
