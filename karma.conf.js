// Karma configuration
// Generated on Thu Jul 25 2013 13:26:46 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    sauceLabs: {
      username: 'username',
      accessKey: 'access key',
      startConnect: true,
      testName: 'whooo app'
    },

    // define SL browsers
    customLaunchers: {
      sl_chrome_linux: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'linux'
      },
      sl_ie: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      }
    },


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/specs-bundle.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // cli runner port
    runnerPort: 9100,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
