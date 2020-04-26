var browserstack = require('browserstack-local');

if (!process.env.BROWSERSTACK_USERNAME) {
    console.log('Please set process.env.BROWSERSTACK_USERNAME');
    exit();
}

if (!process.env.BROWSERSTACK_ACCESS_KEY) {
    console.log('Please set process.env.BROWSERSTACK_ACCESS_KEY');
    exit();
}

nightwatch_config = {
    src_folders: ['tests/local'],

    selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 80,
    },

    common_capabilities: {
        build: 'nightwatch-browserstack',
        'browserstack.user': process.env.BROWSERSTACK_USERNAME,
        'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
        'browserstack.debug': true,
        'browserstack.local': true,
        'browserstack.console': 'errors',
        'browserstack.networkLogs': true,
    },

    test_settings: {
        default: {
            networkConnectionEnabled: true,
        },
        chrome: {
            desiredCapabilities: {
                browser: 'chrome',
                networkConnectionEnabled: true,
            },
        },
        firefox: {
            desiredCapabilities: {
                browser: 'firefox',
                networkConnectionEnabled: true,
            },
        },
        safari: {
            desiredCapabilities: {
                browser: 'safari',
                networkConnectionEnabled: true,
            },
        },
    },
};

// Code to support common capabilites
for (var i in nightwatch_config.test_settings) {
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
    config['desiredCapabilities'] = config['desiredCapabilities'] || {};
    for (var j in nightwatch_config.common_capabilities) {
        config['desiredCapabilities'][j] =
            config['desiredCapabilities'][j] ||
            nightwatch_config.common_capabilities[j];
    }
}

module.exports = nightwatch_config;
