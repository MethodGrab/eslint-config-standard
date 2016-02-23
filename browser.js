'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	env : {
		browser  : true,
		node     : false,
		commonjs : true,
		es6      : false,
	},

	rules : {},

};


module.exports = merge( {}, require( './index' ), extras );
