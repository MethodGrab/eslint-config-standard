'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	env : {
		node     : true,
		commonjs : true,
		es6      : true,
	},

	parserOptions : {
		ecmaVersion : 6,
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
		'no-confusing-arrow'        : 2,
		'no-const-assign'           : 2,
		'no-dupe-class-members'     : 2,
		'no-new-symbol'             : 2,
		'no-this-before-super'      : 2,
		'no-useless-constructor'    : 1,
		'no-var'                    : 2,
		'object-shorthand'          : 1,
		'prefer-arrow-callback'     : 1,
		'prefer-const'              : 1,
		'prefer-spread'             : 1,
		'prefer-reflect'            : 0,
		'prefer-rest-params'        : 1,
		'prefer-template'           : 1,
		'require-yield'             : 2,
		'template-curly-spacing'    : [ 1, 'never' ],
		'yield-star-spacing'        : [ 1, 'after' ],
	},

};


module.exports = merge( {}, require( './index' ), extras );
