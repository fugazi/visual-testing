/// <reference types="Cypress" />

describe('Lighthouse Performance Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Home Page Performance Audit', () => {
    cy.lighthouse();
  });
  
  it('Desktop - About Page Performance Audit', () => {
    cy.visit('/info');
    cy.lighthouse();
  });

  it('Mobile - Home Page Performance Audit', () => {
    cy.viewport('iphone-6');
    cy.lighthouse();
  });

  it('Lighthouse Performance audits using custom thresholds', () => {
    const customThresholds = {
      performance: 50,
      accessibility: 50,
      seo: 70,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 500,
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };
    cy.lighthouse(customThresholds, desktopConfig);
  });
});
