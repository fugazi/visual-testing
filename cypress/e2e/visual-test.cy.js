/// <reference types="cypress" />

import { addMatchImageSnapshotCommand } from "cypress-image-diff-js";

/**
 * Adds a custom command to Cypress called `addMatchImageSnapshotCommand`.
 * This command is used for performing visual regression testing by comparing screenshots of a webpage with a reference image.
 *
 * @param {Object} options - The configuration options for visual regression testing.
 * @param {number} options.failureThreshold - The threshold for image comparison, specifying the maximum percentage difference allowed between the reference image and the captured screenshot.
 * @param {string} options.failureThresholdType - The type of threshold used for image comparison.
 * @param {Object} options.customDiffConfig - An object containing configuration options for pixel diff.
 * @param {number} options.customDiffConfig.threshold - The maximum percentage difference allowed between pixels.
 * @param {string} options.capture - The area of the webpage to capture for comparison.
 */
addMatchImageSnapshotCommand({
  failureThreshold: 0.5,
  failureThresholdType: "percent",
  customDiffConfig: { threshold: 0.5 },
  capture: "fullPage",
});

describe("Performing Visual Regression Test to validate Visual Testing", () => {
  it("Open DemoCart page should match the snapshot", () => {
    cy.visit("https://www.monofonicos.net");
    cy.matchImageSnapshot();
  });
});
