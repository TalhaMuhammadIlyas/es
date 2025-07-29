import type { Options } from '@wdio/types';

interface TestResult {
    error?: Error;
    result?: any;
    duration?: number;
    passed: boolean;
    retries: number;
}

export const config: any = {
    // new commit 
    port: 4723,
    specs: [
        './test/specs/Test1.ts'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Galaxy S23 Ultra',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'app/app-staging-release.apk',
        'appium:noReset': true  // This prevents app reinstallation
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },
    afterTest: async function (test: any, context: any, { error, result, duration, passed, retries }: TestResult) {
        if (!passed) {
            // Take a screenshot when test fails
            const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
            const screenshotPath = `./screenshots/failed-test-${timestamp}.png`;
            await browser.saveScreenshot(screenshotPath);
        }
    },
};