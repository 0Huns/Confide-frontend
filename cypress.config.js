const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      try {
        if (fs.existsSync("cypress.env.json")) {
          const envConfig = JSON.parse(
            fs.readFileSync("cypress.env.json", "utf8")
          );
          config.env = { ...config.env, ...envConfig };
        }
      } catch (error) {
        console.error("Error reading cypress.env.json:", error.message);
      }
      return config;
    },
    baseUrl: "https://confide-service.netlify.app",
  },
});
