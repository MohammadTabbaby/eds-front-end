exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
            // Vous pouvez spécifier d'autres options Edge ici
        }
    },
    onPrepare: function() {
        browser.ignoreSynchronization = false; // Pour les applications Angular
    }
};
