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

  it('Mobile - About Page Performance Audit', () => {
    cy.visit('/info');
    cy.viewport('iphone-xr', 'landscape');
    cy.lighthouse();
  });

  it('Mobile - Home Page Performance Audit', () => {
    cy.viewport('iphone-6');
    cy.lighthouse();
  });

  it('MacBook - Home Page Performance Audit', () => {
    cy.viewport('macbook-16');
    cy.lighthouse();
  });

  it('iPad - Home Page Performance Audit', () => {
    cy.viewport('ipad-mini');
    cy.lighthouse();
  });

  it('Samsung - Home Page Performance Audit', () => {
    cy.viewport('samsung-s10');
    cy.lighthouse();
  });

  it('Landscape - Home Page Performance Audit', () => {
    cy.viewport('iphone-xr', 'landscape');
    cy.lighthouse();
  });

  it('Lighthouse Performance audits using custom thresholds', () => {
    const customThresholds = {
      performance: 90,
      accessibility: 90,
      seo: 85,
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
