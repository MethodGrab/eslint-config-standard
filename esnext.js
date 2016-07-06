'use strict';

module.exports = {

	env : {
		node     : true,
		commonjs : true,
		es6      : true,
	},

	parserOptions : {
		ecmaVersion : 7,
		sourceType  : 'module',
	},

	rules : {
		// Strict mode
		'strict'                    : 0, // es6 modules are always strict

		// ES2015 (ES6)
		// 'arrow-body-style'          : [ 2, 'as-needed' ],
		// 'arrow-parens'              : [ 2, 'as-needed' ],
		'arrow-spacing'             : [ 2, { 'before' : true, 'after' : true } ],
		'constructor-super'         : 2,
		'generator-star-spacing'    : [ 1, 'after' ],
		'no-class-assign'           : 1,
		'no-confusing-arrow'        : [ 2, { allowParens: true } ],
		'no-const-assign'           : 2,
		'no-dupe-class-members'     : 2,
		'no-duplicate-imports'      : [ 2, { 'includeExports': true } ],
		'no-new-symbol'             : 2,
		'no-this-before-super'      : 2,
		'no-useless-computed-key'   : 2,
		'no-useless-constructor'    : 1,
		'no-useless-rename'         : 2,
		'no-var'                    : 2,
		'object-shorthand'          : 1,
		'prefer-arrow-callback'     : [ 1, { allowNamedFunctions : true } ],
		'prefer-const'              : 1,
		'prefer-spread'             : 1,
		'prefer-reflect'            : 0,
		'prefer-rest-params'        : 1,
		'prefer-template'           : 1,
		'require-yield'             : 2,
		'rest-spread-spacing'       : [ 1, 'never' ],
		'template-curly-spacing'    : [ 1, 'never' ],
		'yield-star-spacing'        : [ 1, 'after' ],
	},

};
