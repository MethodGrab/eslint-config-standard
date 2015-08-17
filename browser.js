// extends index.js

'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	'env' : {
		'browser' : true,
		'node'    : false,
		'mocha'   : false,
		'es6'     : false,
	},

};


module.exports = merge( {}, require( './index' ), extras );
