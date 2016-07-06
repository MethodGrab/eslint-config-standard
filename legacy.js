'use strict';

var path = require( 'path' );

module.exports = {

	extends : path.join( __dirname, 'browser.js' ),

	parserOptions : {
		ecmaVersion : 3,
	},

	rules : {
		// Possible errors
		'comma-dangle'          : [ 2, 'never' ],
		'quote-props'           : [ 2, 'as-needed', { 'keywords' : true } ],

		// Best practices
		'dot-notation'          : [ 2, { 'allowKeywords' : false } ],
		'radix'                 : 2,

		// Variables
		'no-catch-shadow'       : 2,
	},

};
