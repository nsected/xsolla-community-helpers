'use strict';

class helperBrowser extends Helper {
     async helperBrowser(method, argument) {
         //add helperBrowser in helpers of codecept config file
         //use await I.helperBrowser('url', '/signin');
         return await this.helpers['WebDriverIO'].browser[method](argument)
    }
}

module.exports = helperBrowser;