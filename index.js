//
// Based on eslint 0.21.2 config
//
// @link https://github.com/eslint/eslint/blob/v0.21.2/conf/eslint.json
// @link http://eslint.org/docs/rules
// @link http://eslint.org/docs/user-guide/configuring
//

'use strict';

module.exports = {

	'env' : {
		'browser' : true,
		'node'    : true,
		'amd'     : false,
		'mocha'   : true,
		'jasmine' : false,
	},

	'rules' : {

		// Possible errors
		'comma-dangle'                      : [ 2, 'never' ], // es3
		'no-cond-assign'                    : 2,
		'no-console'                        : 0,
		'no-constant-condition'             : 2,
		'no-control-regex'                  : 2,
		'no-debugger'                       : 2,
		'no-dupe-keys'                      : 2,
		'no-dupe-args'                      : 2,
		'no-duplicate-case'                 : 2,
		'no-empty-class'                    : 2,
		'no-empty'                          : 1,
		'no-ex-assign'                      : 2,
		'no-extra-boolean-cast'             : 2,
		'no-extra-parens'                   : 0,
		'no-extra-semi'                     : 2,
		'no-func-assign'                    : 2,
		'no-inner-declarations'             : [ 2, 'functions' ],
		'no-invalid-regexp'                 : 2,
		'no-irregular-whitespace'           : 2,
		'no-negated-in-lhs'                 : 2,
		'no-obj-calls'                      : 2,
		'no-regex-spaces'                   : 2,
		'no-reserved-keys'                  : 1, // es3
		'no-sparse-arrays'                  : 2,
		'no-unreachable'                    : 2,
		'use-isnan'                         : 2,
		'valid-jsdoc'                       : 0,
		'valid-typeof'                      : 2,

		// Best practices
		'block-scoped-var'                  : 0,
		'complexity'                        : [ 0, 11 ],
		'consistent-return'                 : 2,
		'curly'                             : [ 2, 'all' ],
		'default-case'                      : 0,
		'dot-notation'                      : [ 2, { 'allowKeywords' : false } ], // es3
		'dot-location'                      : 0,
		'eqeqeq'                            : 2,
		'guard-for-in'                      : 0,
		'no-alert'                          : 1,
		'no-caller'                         : 2,
		'no-div-regex'                      : 0,
		'no-else-return'                    : 1,
		'no-empty-label'                    : 2,
		'no-eq-null'                        : 1,
		'no-eval'                           : 2,
		'no-extend-native'                  : 2,
		'no-extra-bind'                     : 2,
		'no-fallthrough'                    : 1,
		'no-floating-decimal'               : 1,
		'no-implied-eval'                   : 2,
		'no-iterator'                       : 2,
		'no-labels'                         : 2,
		'no-lone-blocks'                    : 2,
		'no-loop-func'                      : 2,
		'no-multi-spaces'                   : 2,
		'no-multi-str'                      : 2,
		'no-native-reassign'                : 2,
		'no-new-func'                       : 2,
		'no-new-wrappers'                   : 1,
		'no-new'                            : 1,
		'no-octal-escape'                   : 2,
		'no-octal'                          : 2,
		'no-param-reassign'                 : 0,
		'no-process-env'                    : 0,
		'no-proto'                          : 2,
		'no-redeclare'                      : 2,
		'no-return-assign'                  : 1,
		'no-script-url'                     : 2,
		'no-self-compare'                   : 1,
		'no-sequences'                      : 2,
		'no-throw-literal'                  : 1,
		'no-unused-expressions'             : 1,
		'no-void'                           : 0,
		'no-warning-comments'               : [ 0, { 'terms' : [ 'todo', 'fixme', 'xxx' ], 'location' : 'start' } ],
		'no-with'                           : 2,
		'radix'                             : 1, // es3
		'vars-on-top'                       : 0,
		'wrap-iife'                         : [ 1, 'outside' ],
		'yoda'                              : [ 2, 'never' ],

		// Strict mode
		'strict'                            : [ 0, 'global' ],

		// Variables
		'no-catch-shadow'                   : 2,
		'no-delete-var'                     : 2,
		'no-label-var'                      : 2,
		'no-shadow-restricted-names'        : 2,
		'no-shadow'                         : 2,
		'no-undef-init'                     : 2,
		'no-undef'                          : 2,
		'no-undefined'                      : 1,
		'no-unused-vars'                    : [ 1, { 'vars' : 'all', 'args' : 'none' } ],
		'no-use-before-define'              : [ 1, 'nofunc' ],

		// Node.js
		'handle-callback-err'               : 0,
		'no-mixed-requires'                 : [ 0, true ],
		'no-new-require'                    : 1,
		'no-path-concat'                    : 1,
		'no-process-exit'                   : 1,
		'no-restricted-modules'             : 0,
		'no-sync'                           : 0,

		// Stylistic issues
		'brace-style'                       : [ 0, '1tbs', { 'allowSingleLine' : true } ],
		'camelcase'                         : 1,
		'comma-spacing'                     : 0,
		'comma-style'                       : [ 0, 'last' ],
		'consistent-this'                   : [ 0, 'self' ],
		'eol-last'                          : 0,
		'func-names'                        : 0,
		'func-style'                        : [ 0, 'declaration' ],
		'indent'                            : [ 1, 'tab', { 'indentSwitchCase' : true } ],
		'key-spacing'                       : [ 0, { 'beforeColon' : true, 'afterColon' : true } ],
		'linebreak-style'                   : [ 1, 'unix' ],
		'max-nested-callbacks'              : [ 0, 2 ],
		'new-cap'                           : 0,
		'new-parens'                        : 0,
		'newline-after-var'                 : 0,
		'no-array-constructor'              : 1,
		'no-continue'                       : 0,
		'no-inline-comments'                : 0,
		'no-lonely-if'                      : 0,
		'no-mixed-spaces-and-tabs'          : [ 2, 'smart-tabs' ],
		'no-multiple-empty-lines'           : [ 0, { 'max' : 2 } ],
		'no-nested-ternary'                 : 0,
		'no-new-object'                     : 2,
		'no-spaced-func'                    : 0,
		'no-ternary'                        : 0,
		'no-trailing-spaces'                : 1,
		'no-underscore-dangle'              : 0,
		'no-unneeded-ternary'               : 1,
		'no-wrap-func'                      : 2,
		'one-var'                           : [ 0, 'never' ],
		'operator-assignment'               : [ 0, 'always' ],
		'operator-linebreak'                : [ 0, 'after' ],
		'padded-blocks'                     : [ 0, 'always' ],
		'quote-props'                       : 0,
		'quotes'                            : [ 2, 'single', 'avoid-escape' ],
		'semi-spacing'                      : [ 0, { 'before' : false, 'after' : true } ],
		'semi'                              : [ 2, 'always' ],
		'sort-vars'                         : 0,
		'space-after-keywords'              : [ 0, 'always' ],
		'space-before-blocks'               : [ 0, 'always' ],
		'space-before-function-paren'       : [ 0, { 'anonymous' : 'never', 'named' : 'always' } ],
		'space-in-brackets'                 : [ 0, 'always' ],
		'space-in-parens'                   : [ 0, 'always', { 'exceptions' : [ 'empty' ] } ],
		'space-infix-ops'                   : 0,
		'space-return-throw-case'           : 1,
		'space-unary-ops'                   : [ 0, { 'words' : true, 'nonwords' : false } ],
		'spaced-line-comment'               : [ 0, 'always' ],
		'wrap-regex'                        : 0,

		// ES6
		'generator-star-spacing'            : 0,
		'no-var'                            : 0,
		'object-shorthand'                  : 0,

		// Legacy
		'max-depth'                         : [ 0, 4 ],
		'max-len'                           : [ 0, 80, 4 ],
		'max-params'                        : [ 0, 3 ],
		'max-statements'                    : [ 0, 10 ],
		'no-bitwise'                        : 0,
		'no-plusplus'                       : 0,

		// Deprecated
		// 'no-comma-dangle'                   : 0,
		// 'global-strict'                     : [ 2, 'never' ],
		// 'no-extra-strict'                   : 2,
		// 'no-space-before-semi'              : 0,
		// 'space-after-function-name'         : [ 0, 'never' ],
		// 'space-before-function-parentheses' : [ 0, 'always' ],
		// 'generator-star'                    : 0,

	},

};
