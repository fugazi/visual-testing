const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.monofonicos.net",
    setupNodeEvents(on, config) {
      // Call the plugin function with on and config
      getCompareSnapshotsPlugin(on, config);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });

      return config;
    },
  },
});