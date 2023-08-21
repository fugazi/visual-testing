/// <reference types="cypress" />

import { addMatchImageSnapshotCommand } from "cypress-image-diff-js";

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for image comparison
  failureThresholdType: "percent", // type of thresholds
  customDiffConfig: { threshold: 0.1 }, // threshold for pixel diff
  capture: "viewport", // capture the entire viewports
});

describe("Performing Visual Regression Test to validate Visual Testing", () => {
  it("Open DemoCart page should match the snapshot", () => {
    cy.visit("https://demo.opencart.com");
    cy.matchImageSnapshot();
  });
});
