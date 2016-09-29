'use strict';

var path = require( 'path' );

module.exports = {

	extends : path.join( __dirname, 'esnext.js' ),

	plugins : [
		'ava',
	],

	rules : {
		'ava/assertion-arguments'       : 'error',
		'ava/assertion-message'         : [ 'off', 'always' ],
		'ava/max-asserts'               : [ 'warn', 5 ],
		'ava/no-async-fn-without-await' : 'error',
		'ava/no-cb-test'                : 'warn',
		'ava/no-duplicate-modifiers'    : 'error',
		'ava/no-identical-title'        : 'error',
		'ava/no-ignored-test-files'     : 'error',
		'ava/no-invalid-end'            : 'error',
		'ava/no-nested-tests'           : 'error',
		'ava/no-only-test'              : 'error',
		'ava/no-skip-assert'            : 'error',
		'ava/no-skip-test'              : 'error',
		'ava/no-statement-after-end'    : 'error',
		'ava/no-todo-implementation'    : 'error',
		'ava/no-todo-test'              : 'warn',
		'ava/no-unknown-modifiers'      : 'error',
		'ava/prefer-async-await'        : 'error',
		'ava/prefer-power-assert'       : 'warn',
		'ava/test-ended'                : 'error',
		'ava/test-title'                : [ 'error', 'if-multiple' ],
		'ava/use-t-well'                : 'error',
		'ava/use-t'                     : 'error',
		'ava/use-test'                  : 'error',
		'ava/use-true-false'            : 'error',
	},

};
