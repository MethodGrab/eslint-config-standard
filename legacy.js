'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'rules' : {
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


module.exports = merge( {}, require( './browser' ), extras );
