const report = require("multiple-cucumber-html-reporter");

process.env.FORCE_COLOR = 'false';

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results",
  reportName: "My sample playwright report",
  pageTitle: "GitHub Test Report",
  displayDuration: true,
  durationInMS: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "121",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    ],
  },
});
