/// <reference types="Cypress" />

/**
 * The code snippet is a part of a test suite for performing Lighthouse performance audits on different pages of a website using Cypress.
 *
 */
describe("Lighthouse Performance Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Home Page Performance Audit", () => {
    cy.lighthouse();
  });

  it("Desktop - About Page Performance Audit", () => {
    cy.visit("/info");
    cy.lighthouse();
  });

  it("Mobile - About Page Performance Audit", () => {
    cy.visit("/info");
    cy.viewport("iphone-xr", "landscape");
    cy.lighthouse();
  });

  it("MacBook - About Page Performance Audit", () => {
    cy.visit("/info");
    cy.viewport("macbook-16", "landscape");
    cy.lighthouse();
  });

  it("Mobile - Home Page Performance Audit", () => {
    cy.viewport("iphone-6");
    cy.lighthouse();
  });

  it("MacBook - Home Page Performance Audit", () => {
    cy.viewport("macbook-16");
    cy.lighthouse();
  });

  it("iPad - Home Page Performance Audit", () => {
    cy.viewport("ipad-mini");
    cy.lighthouse();
  });

  it("Samsung - Home Page Performance Audit", () => {
    cy.viewport("samsung-s10");
    cy.lighthouse();
  });

  it("Landscape - Home Page Performance Audit", () => {
    cy.viewport("iphone-xr", "landscape");
    cy.lighthouse();
  });

  it("Performance and Accessibility Audit for Homepage", () => {
    cy.lighthouse({
      onlyCategories: ["performance", "accessibility"], // Focus on these categories
      formFactor: "desktop", // Or "mobile" if you want to test on mobile
      screenEmulation: { disabled: true }, // Disable screen emulation for accurate results
    });
  });

  it("Performance and Accessibility Audit for Info page", () => {
    cy.visit("/info");
    cy.lighthouse({
      onlyCategories: ["performance", "accessibility"],
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    });
  });

  it("Lighthouse Performance audits using custom thresholds", () => {
    const customThresholds = {
      performance: 98,
      accessibility: 91,
      seo: 95,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      "cumulative-layout-shift": 0.2,
      "total-blocking-time": 500,
    };

    const desktopConfig = {
      formFactor: "desktop",
      screenEmulation: { disabled: true },
    };
    cy.lighthouse(customThresholds, desktopConfig);
  });

  it("Lighthouse Performance audits using custom values", () => {
    cy.lighthouse({
      performance: 100,
      accessibility: 100,
      seo: 100,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      "cumulative-layout-shift": 0.1,
      "total-blocking-time": 500,
    });
  });

  it("Lighthouse Performance audits using custom values", () => {
    cy.lighthouse({
      chromeFlags: ["--headless", "--disable-gpu"],
      onlyCategories: ["performance"],
      emulatedFormFactor: "desktop",
      throttling: {
        rttMs: 90,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
      screenEmulation: {
        mobile: true,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: true,
      },
    });
  });
});
