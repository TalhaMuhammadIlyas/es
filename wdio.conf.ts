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
        'appium:deviceName': 'Talha A51',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './app/app-staging-release.apk',
        'appium:noReset': true,
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 12000,
    connectionRetryTimeout: 100000,
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