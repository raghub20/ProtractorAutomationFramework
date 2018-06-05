// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
var path = require('path');
const prettyReporter = new PrettyReporter({
    // required, there is no default
    path: path.join(__dirname, 'results'),
    screenshotOnPassed: true
});

exports.config = {
    // This will destroy and creates the new browser object for each test.
    restartBrowserBetweenTests: true,
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        regressionSuite: './dist/out-tsc/e2e/protractor/regression-suite/*spec.js'
    },
    /*
    * It will connect to locally installed browser. First preference will be chrome and next is
    * firefox. In order to use this configuration either of these browsers must be installed in 
    * script running machine.
    */
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 1200000
    },
    onPrepare() {
        /* jasmine.getEnv().addReporter(new SpecReporter(
            {
                spec: { displayStackTrace: true }
            }
        )); */
        jasmine.getEnv().addReporter(prettyReporter);
    },
    /* if using isSharded option see below */
    beforeLaunch() {
        prettyReporter.startReporter();
    }
}