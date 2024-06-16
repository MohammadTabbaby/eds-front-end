// protractor.conf.js

exports.config = {
    framework: 'jasmine',
    specs: ['./src/**/*.e2e-spec.ts'],
    capabilities: {
      browserName: 'chrome' // Changez ceci selon le navigateur que vous souhaitez tester
    },
    baseUrl: 'http://localhost:4200/' // L'URL de base de votre application Angular
  };
  