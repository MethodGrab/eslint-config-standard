// extends index.js

'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'env' : {
		'browser'  : true,
		'commonjs' : true,
		'node'     : false,
		'mocha'    : false,
		'es6'      : false,
	},

	'rules' : {
		// Possible errors
		'comma-dangle'          : [ 2, 'never' ],
		'quote-props'           : [ 2, 'as-needed', { 'keywords' : true } ],

		// Best practices
		'dot-notation'          : [ 2, { 'allowKeywords' : false } ],
		'radix'                 : 2,

		// Variables
		'no-catch-shadow'       : 2,

		// ES2015 (ES6)
		'prefer-arrow-callback' : 0,
		'prefer-template'       : 0,
	},

};


module.exports = merge( {}, require( './index' ), extras );
