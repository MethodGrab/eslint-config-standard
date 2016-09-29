'use strict';

var path = require( 'path' );

module.exports = {

	extends : path.join( __dirname, 'browser.js' ),

	parserOptions : {
		ecmaVersion : 3,
	},

	rules : {
		// Possible errors
		'comma-dangle'          : [ 'error', 'never' ],
		'quote-props'           : [ 'error', 'as-needed', { 'keywords' : true } ],

		// Best practices
		'dot-notation'          : [ 'error', { 'allowKeywords' : false } ],
		'radix'                 : 'error',

		// Variables
		'no-catch-shadow'       : 'error',
	},

};
