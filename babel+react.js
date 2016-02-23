'use strict';

var merge = require( 'lodash.merge' );


var extras = {

	parser : 'babel-eslint',

	plugins : [ 'react' ],

	env : {
		browser : true,
		node    : true,
		es6     : true,
	},

	parserOptions : {
		ecmaFeatures : {
			jsx : true,
		},
	},

	rules : {
		'strict'                             : 0,

		'jsx-quotes'                         : [ 1, 'prefer-double' ],
		'react/display-name'                 : 0,
		'react/jsx-boolean-value'            : 1,
		'react/jsx-closing-bracket-location' : 1,
		'react/jsx-curly-spacing'            : [ 2, 'always' ],
		'react/jsx-indent-props'             : [ 1, 'tab' ],
		'react/jsx-max-props-per-line'       : 0,
		'react/jsx-no-duplicate-props'       : 2,
		'react/jsx-no-undef'                 : 2,
		'react/jsx-sort-prop-types'          : 0,
		'react/jsx-sort-props'               : 0,
		'react/jsx-uses-react'               : 2,
		'react/jsx-uses-vars'                : 1,
		'react/no-danger'                    : 2,
		'react/no-did-mount-set-state'       : [ 2, 'allow-in-func' ],
		'react/no-did-update-set-state'      : 2,
		'react/no-multi-comp'                : 2,
		'react/no-set-state'                 : 1,
		'react/no-unknown-property'          : 2,
		'react/prop-types'                   : 2,
		'react/react-in-jsx-scope'           : 2,
		'react/require-extension'            : 1,
		'react/self-closing-comp'            : 2,
		'react/sort-comp'                    : 1,
		'react/wrap-multilines'              : 2,
	},

};


module.exports = merge( {}, require( './es2015' ), extras );
