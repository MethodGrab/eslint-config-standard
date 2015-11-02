'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'rules' : {
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
		'new-cap'                   : 1,
		'new-parens'                : 1,
		'no-lonely-if'              : 1,
		'object-curly-spacing'      : 1,
		'space-after-keywords'      : [ 1, 'always' ],
		'space-before-keywords'     : [ 1, 'always' ],
	},

};


module.exports = merge( {}, require( './index' ), extras );
