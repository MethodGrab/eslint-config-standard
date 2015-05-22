// extends index.js

'use strict';

var merge = require( 'lodash/object/merge' );


var extras = {

	'env' : {
		'es6' : true
	},

	'rules' : {
		// Possible errors
		'comma-dangle'     : [ 0, 'always-multiline' ],
		'no-reserved-keys' : 0,

		// Best practices
		'dot-notation'     : [ 2, { 'allowKeywords' : true } ],
		'radix'            : 0,

		// Variables
		'no-catch-shadow'  : 0,
	},

};


module.exports = merge( {}, require( './index' ), extras );
