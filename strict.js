// extends index.js

'use strict';

var merge = require( 'lodash/object/merge' );


var extras = {

	'rules' : {
		'no-param-reassign'   : 2,
		'strict'              : [ 2, 'global' ],
		'handle-callback-err' : [ 2, '^(err|error)$' ],
		'no-mixed-requires'   : [ 1, true ],
		'no-sync'             : 1,
		'new-cap'             : 1,
		'new-parens'          : 1,
		'no-lonely-if'        : 1,
	},

};


module.exports = merge( {}, require( './index' ), extras );
