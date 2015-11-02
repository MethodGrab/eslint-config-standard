'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'env' : {
		'node'     : true,
		'commonjs' : true,
		'es6'      : true,
	},

	'rules' : {
		// ES2015 (ES6)
		'arrow-body-style'          : [ 2, 'as-needed' ],
		'arrow-parens'              : [ 2, 'as-needed' ],
		'arrow-spacing'             : [ 2, { 'before' : true, 'after' : true } ],
		'constructor-super'         : 2,
		// 'generator-star-spacing'    : 0,
		'no-arrow-condition'        : 2,
		'no-class-assign'           : 1,
		'no-const-assign'           : 2,
		'no-dupe-class-members'     : 2,
		'no-this-before-super'      : 2,
		'no-var'                    : 2,
		'object-shorthand'          : 1,
		'prefer-arrow-callback'     : 1,
		'prefer-const'              : 1,
		'prefer-spread'             : 1,
		'prefer-reflect'            : 0,
		'prefer-template'           : 1,
		'require-yield'             : 2,
	},

};


module.exports = merge( {}, require( './index' ), extras );
