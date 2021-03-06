import path       from 'path';
import test       from 'ava';
import isPlainObj from 'is-plain-obj';
import { ESLint } from 'eslint';


const runEslint = async ( str, conf ) => {
	const eslint = new ESLint({
		cwd: path.resolve( __dirname, '../' ),
		resolvePluginsRelativeTo: path.resolve( __dirname, '../' ),
		useEslintrc: false,
		overrideConfig: conf,
	});

	let result = await eslint.lintText( str );
	result = result[0].messages;
	return result;
};


test( 'main', async t => {
	const conf = require( '../' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( `'use strict';\n\nvar foo = "bar";\n`, conf );

	t.assert( errors[0].ruleId === 'quotes' );
	t.assert( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'strict', async t => {
	const conf = require( '../strict' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( `'use strict'; var foo = 100; var bar = foo * 0.25;\n`, conf );

	t.assert( errors[0].ruleId === 'no-magic-numbers' );
	t.assert( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'esnext', async t => {
	const conf = require( '../esnext' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( 'var foo = true;\n', conf );

	t.assert( errors[0].ruleId === 'no-var' );
	t.assert( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'esnext w/ es2016', async t => {
	const conf = require( '../esnext' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( `
		const foo = async ( bar, ...baz ) => { await Promise.resolve({ bar }) };
	`, conf );

	t.assert( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});

test( 'react', async t => {
	const conf = require( '../react' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( `import React from 'React'; const Hello = () => {}; <Hello foo="bar" foo="baz" />;\n`, conf );

	t.assert( errors[0].ruleId === 'react/jsx-no-duplicate-props' );
	t.assert( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'ava', async t => {
	const conf = require( '../ava' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );

	const errors = await runEslint( `
		import test from 'ava';

		test( 'foo', t => {
			t.assert( true === true );
		});
	`, conf );

	t.assert( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'browser', async t => {
	const conf = require( '../browser' );

	t.assert( isPlainObj( conf ) );

	const errors = await runEslint( `'use strict'; window.foo = 'bar';\n`, conf );

	t.assert( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'legacy', async t => {
	const conf = require( '../legacy' );

	t.assert( isPlainObj( conf ) );
	t.assert( isPlainObj( conf.rules ) );


	/*
	comma-dangle (e.g. `var foo = { bar: 123, }`) is now an ESLint parse error with `parserOptions: { ecmaVersion: 3 }` and ESLint v7.5.0 despite the docs saying its valid:
	> Trailing commas in object literals are valid according to the ECMAScript 5 (and ECMAScript 3!) spec. However, IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.
	> -- https://eslint.org/docs/rules/comma-dangle

	TODO: re-enable the `comma-dangle` assertion below when this gets fixed.

	const errors = await runEslint( `
		'use strict';
		window.foo = 'bar';
		var foo = { bar: 123, };
		var baz = { catch: function(){ return true; } };
		baz.catch();
		var int = parseInt( '10' );
	`, conf );

	t.assert( errors[0].ruleId === 'comma-dangle' );
	t.assert( errors[1].ruleId === 'quote-props' );
	t.assert( errors[2].ruleId === 'dot-notation' );
	t.assert( errors[3].ruleId === 'radix' );

	t.assert( errors.length === 4, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
	*/


	const errors = await runEslint( `
		'use strict';
		window.foo = 'bar';
		var baz = { catch: function(){ return true; } };
		baz.catch();
		var int = parseInt( '10' );
	`, conf );

	t.assert( errors[0].ruleId === 'quote-props' );
	t.assert( errors[1].ruleId === 'dot-notation' );
	t.assert( errors[2].ruleId === 'radix' );

	t.assert( errors.length === 3, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});
