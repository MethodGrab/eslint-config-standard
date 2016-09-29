'use strict';

module.exports = {

	rules : {
		// Strict mode
		'strict'                    : [ 'error', 'global' ],

		// Best practices
		'no-magic-numbers'          : 'warn',

		// Node.js
		'handle-callback-err'       : [ 'error', '^(err|error)$' ],
		'no-mixed-requires'         : [ 'warn', true ],
		'no-sync'                   : 'warn',

		// Stylistic issues
		'computed-property-spacing' : 'warn',
		'key-spacing'               : [ 'warn', {
			align: {
				beforeColon : true,
				afterColon  : true,
				mode        : 'minimum',
				on          : 'colon',
			},
			singleLine: {
				beforeColon : false,
				afterColon  : true,
				mode        : 'minimum',
			},
			multiLine: {
				beforeColon : false,
				afterColon  : true,
				mode        : 'minimum',
			},
		}],
		'keyword-spacing'           : 'warn',
		'new-cap'                   : 'warn',
		'new-parens'                : 'warn',
		'newline-before-return'     : 'warn',
		'newline-per-chained-call'  : [ 'warn', { 'ignoreChainWithDepth' : 3 } ],
		'no-lonely-if'              : 'warn',
		'object-curly-spacing'      : 'warn',
	},

};
