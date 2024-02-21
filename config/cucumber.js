module.exports = {
    default: {
      tags: process.env.npm_config_TAGS || "",
      paths:[
        "src/test/features/",
      ],
      dryRun:false,
      formatOptions: {
        snippetInterface: "async-await"
      },
      require: [
        "src/test/steps/*.ts",
        "src/test/pages/*.ts",
        "src/hooks/*.ts"
      ],
      requireModule: [
        "ts-node/register"
      ],
      format: [
        "html:test-results/cucumber-report.html",
        "json:test-results/cucumber-report.json"
      ]
    }  
}