const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.monofonicos.net", // this is the URL your server runs on during tests
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
});
