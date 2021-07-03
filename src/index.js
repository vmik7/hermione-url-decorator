const URI = require('urijs');

module.exports = (hermione, options) => {
    hermione.on(hermione.events.NEW_BROWSER, (browser) => {
        browser.overwriteCommand('url', (callback, url) => {
            if (url) {
                url = new URL(url).addQuery(options.query).toString();
            }

            return callback(url);
        });
    });
};
