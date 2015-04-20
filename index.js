
var h = require('./lib/helloWorld');
var t = require('./lib/test');

/* NodeJs use CommonJS specification.
 *
 * This is a example to know how to use the module.
 *
 */
var app = exports = module.exports = {};
exports.test = t;
exports.hello = h;
