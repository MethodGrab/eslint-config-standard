'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'env' : {
		'browser'  : true,
		'node'     : false,
		'commonjs' : true,
		'mocha'    : false,
		'es6'      : false,
	},

	'rules' : {
		// ES2015 (ES6)
		'prefer-arrow-callback' : 0,
		'prefer-template'       : 0,
	},

};


module.exports = merge( {}, require( './index' ), extras );
