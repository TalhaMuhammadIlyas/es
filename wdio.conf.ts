import type { Options } from '@wdio/types'

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
        'appium:app': 'app/TestIDsBuild.apk',
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 150000
    },
};