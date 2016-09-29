'use strict';

module.exports = {

	env : {
		node     : true,
		commonjs : true,
		es6      : true,
	},

	parserOptions : {
		ecmaVersion : 2017,
		sourceType  : 'module',
	},

	rules : {
		// Strict mode
		'strict'                      : 'off', // es6 modules are always strict

		// Possible errors
		'no-template-curly-in-string' : 'error',

		// ES2015 (ES6)
		// 'arrow-body-style'            : [ 2, 'as-needed' ],
		// 'arrow-parens'                : [ 2, 'as-needed' ],
		'arrow-spacing'               : [ 'error', { before : true, after : true } ],
		'constructor-super'           : 'error',
		'generator-star-spacing'      : [ 'warn', 'after' ],
		'no-class-assign'             : 'warn',
		'no-confusing-arrow'          : [ 'error', { allowParens : true } ],
		'no-const-assign'             : 'error',
		'no-dupe-class-members'       : 'error',
		'no-duplicate-imports'        : [ 'error', { includeExports : true } ],
		'no-new-symbol'               : 'error',
		'no-this-before-super'        : 'error',
		'no-useless-computed-key'     : 'error',
		'no-useless-constructor'      : 'warn',
		'no-useless-rename'           : 'error',
		'no-var'                      : 'error',
		'object-shorthand'            : 'warn',
		'prefer-arrow-callback'       : [ 'warn', { allowNamedFunctions : true } ],
		'prefer-const'                : 'warn',
		'prefer-numeric-literals'     : 'warn',
		'prefer-spread'               : 'warn',
		'prefer-reflect'              : 'off',
		'prefer-rest-params'          : 'warn',
		'prefer-template'             : 'warn',
		'require-yield'               : 'error',
		'rest-spread-spacing'         : [ 'warn', 'never' ],
		// 'sort-imports'                : 'off',
		'symbol-description'          : 'warn',
		'template-curly-spacing'      : [ 'warn', 'never' ],
		'yield-star-spacing'          : [ 'warn', 'after' ],
	},

};
