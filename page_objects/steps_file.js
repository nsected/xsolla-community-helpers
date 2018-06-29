'use strict';
// in this file you can append custom step methods to 'I' object
const config = require('codeceptjs').config.get();
const smartWait = config.helpers.WebDriverIO.smartWait;
const assert = require('assert');
const chrono = require("chrono-node");

function xpathTextEquals(text) {
    return `//*[text() = '${text}']`
}

function xpathTextContains(text) {
    return `//*[contains(text(), '${text}')]`
}

module.exports = function () {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

        assert: assert,

        grabDateFrom: async function (selector) {
            await this.waitForElement(selector, smartWait/1000);
            let elementText = await this.grabTextFrom(selector);
            let elementDate = chrono.parse(elementText[0])[0].text;
            return new Date(elementDate);
        },

        helpers: function () {
            return this.helpers
        },

        elementTextEquals: async function (selector, regexp) {
            await this.waitForElement(selector, smartWait/1000);
            let elementText = this.grabTextFrom(selector);
            assert.ok(new RegExp(regexp).test(elementText));
        },

        seeText: function (text) {
            this.seeElement(xpathTextEquals(text));
        },

        seeContainsText: function (text) {
            this.seeElement(xpathTextContains(text));
        },

        clickOn: function (selector) {
            this.waitForElement(selector, smartWait/1000);
            this.click(selector)
        },

    });
};
