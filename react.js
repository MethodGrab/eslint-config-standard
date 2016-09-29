'use strict';

var path = require( 'path' );

module.exports = {

	extends : path.join( __dirname, 'esnext.js' ),

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
		'strict'                             : 'off',

		'jsx-quotes'                         : [ 'warn', 'prefer-double' ],
		'react/display-name'                 : 'off',
		'react/jsx-boolean-value'            : 'warn',
		'react/jsx-closing-bracket-location' : 'warn',
		'react/jsx-curly-spacing'            : [ 'error', 'always' ],
		'react/jsx-indent-props'             : [ 'warn', 'tab' ],
		'react/jsx-max-props-per-line'       : 'off',
		'react/jsx-no-duplicate-props'       : 'error',
		'react/jsx-no-undef'                 : 'error',
		'react/jsx-sort-prop-types'          : 'off',
		'react/jsx-sort-props'               : 'off',
		'react/jsx-uses-react'               : 'error',
		'react/jsx-uses-vars'                : 'warn',
		'react/no-danger'                    : 'error',
		'react/no-did-mount-set-state'       : [ 'error', 'allow-in-func' ],
		'react/no-did-update-set-state'      : 'error',
		'react/no-multi-comp'                : 'error',
		'react/no-set-state'                 : 'warn',
		'react/no-unknown-property'          : 'error',
		'react/prop-types'                   : 'error',
		'react/react-in-jsx-scope'           : 'error',
		'react/require-extension'            : 'warn',
		'react/self-closing-comp'            : 'error',
		'react/sort-comp'                    : 'warn',
		'react/wrap-multilines'              : 'error',
	},

};
