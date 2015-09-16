'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'rules' : {
		// Best practices
		'no-param-reassign'         : 2,

		// Strict mode
		'strict'                    : [ 2, 'global' ],

		// Node.js
		'handle-callback-err'       : [ 2, '^(err|error)$' ],
		'no-mixed-requires'         : [ 1, true ],
		'no-sync'                   : 1,

		// Stylistic issues
		'computed-property-spacing' : 1,
		'new-cap'                   : 1,
		'new-parens'                : 1,
		'no-lonely-if'              : 1,
		'object-curly-spacing'      : 1,

		// ES2015 (ES6)
		'prefer-const'              : 1,
	},

};


module.exports = merge( {}, require( './index' ), extras );
