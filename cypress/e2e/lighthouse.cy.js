/// <reference types="Cypress" />

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

  it("Lighthouse Performance audits using custom thresholds", () => {
    const customThresholds = {
      performance: 90,
      accessibility: 90,
      seo: 85,
      "first-contentful-paint": 2000,
      "largest-contentful-paint": 3000,
      "cumulative-layout-shift": 0.1,
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
        rttMs: 60,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0, // 0 means unset
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
      },
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
    });
  });
});
