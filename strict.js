'use strict';

var merge = require( 'lodash.merge' );


var cfg = {

	rules : {
		// Strict mode
		'strict'                    : [ 2, 'global' ],

		// Best practices
		'no-magic-numbers'          : 1,

		// Node.js
		'handle-callback-err'       : [ 2, '^(err|error)$' ],
		'no-mixed-requires'         : [ 1, true ],
		'no-sync'                   : 1,

		// Stylistic issues
		'computed-property-spacing' : 1,
		'key-spacing'               : [ 1, { 'beforeColon' : true, 'afterColon' : true, 'mode' : 'minimum' } ],
		'keyword-spacing'           : 1,
		'new-cap'                   : 1,
		'new-parens'                : 1,
		'newline-per-chained-call'  : [ 1, { 'ignoreChainWithDepth' : 3 } ],
		'no-lonely-if'              : 1,
		'object-curly-spacing'      : 1,
	},

};


module.exports = cfg;
