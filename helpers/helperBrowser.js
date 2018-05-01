'use strict';

class helperBrowser extends Helper {
     async helperBrowser(method, argument) {
         return await this.helpers['WebDriverIO'].browser[method](argument)
    }
}

module.exports = helperBrowser;