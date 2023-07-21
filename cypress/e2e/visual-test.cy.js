/// <reference types="cypress" />

import { addMatchImageSnapshotCommand } from "cypress-image-diff-js";

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for image comparison
  failureThresholdType: "percent", // type of threshold
  customDiffConfig: { threshold: 0.1 }, // threshold for pixel diff
  capture: "viewport", // capture the entire viewport
});

describe("Perform Visual Regression Test to validate Visual Testing Regression", () => {
  it("Open DemoCart page should match the snapshot", () => {
    cy.visit("https://demo.opencart.com");
    cy.matchImageSnapshot();
  });
});
