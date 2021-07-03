const URI = require('urijs');

module.exports = (hermione, options) => {
    hermione.on(hermione.events.NEW_BROWSER, (browser) => {
        browser.overwriteCommand('url', (callback, uri) => {
            if (uri) {
                uri = new URI(uri).addQuery(options.query).toString();
            }

            return callback(uri);
        });
    });
};
