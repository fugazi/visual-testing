const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = {
  e2e: {
    baseUrl: "https://www.monofonicos.net", // this is the URL your server runs on during tests
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
      });
    },
  },
};
