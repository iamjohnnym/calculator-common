module.exports = {
  require: "@babel/register",
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    reporterEnabled: "spec, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "junit.xml",
    },
  },
  timeout: 10000,
  exit: true,
};
