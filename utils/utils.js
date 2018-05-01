//Вспомогательные функции для тестов

const chrono = require("chrono-node");
const config = require('codeceptjs').config.get();

module.exports = {
    scroll_element_into_middle:
    "var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);"
    + "var elementTop = arguments[0].getBoundingClientRect().top;"
    + "window.scrollBy(0, elementTop-(viewPortHeight/2));",

    getConfig: config,

    parseDate: date_string => {
        let clear_date_string = chrono.parse(date_string)[0].text;
        return new Date(clear_date_string);
    },

    getElemDate:
        elem_text => {
            let element_date = chrono.parse(elem_text)[0].start.knownValues;
            console.log(element_date.month + '-' +
                element_date.day + '-' +
                element_date.year +
                ' 23:59:59'
            );
            return new Date(
                element_date.month + '-' +
                element_date.day + '-' +
                element_date.year +
                ' 23:59:59'
            )
        },

    regexpTest: (regexp, text) => {
        let myreg = new RegExp(regexp);
        console.log(myreg.test(text));
        let result = JSON.parse(JSON.stringify(myreg.test(text)));
        console.log(result);
        console.log(JSON.parse(JSON.stringify(myreg.test(text))));

        console.log(text);
        if (result) {
            return true
        } else {
            console.log(myreg);
            console.log(text);
            console.log(result);
            throw new Error('assert error')
        }
    },

    sorting: function (a, b) {
        return a == b
            ? 0
            : (a < b ? 1 : -1);
    }
};