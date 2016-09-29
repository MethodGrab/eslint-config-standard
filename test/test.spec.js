import test       from 'ava';
import isPlainObj from 'is-plain-obj';
import eslint     from 'eslint';
import tempWrite  from 'temp-write';


const runEslint = ( str, conf ) => {
	const linter = new eslint.CLIEngine({
		useEslintrc : false,
		configFile  : tempWrite.sync( JSON.stringify( conf ) ),
	});

	return linter.executeOnText( str ).results[0].messages;
};


test( 'main', t => {
	const conf = require( '../' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `'use strict';\n\nvar foo = "bar";\n`, conf );

	t.true( errors[0].ruleId === 'quotes' );
	t.true( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'strict', t => {
	const conf = require( '../strict' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `'use strict'; var foo = 100; var bar = foo * 0.25;\n`, conf );

	t.true( errors[0].ruleId === 'no-magic-numbers' );
	t.true( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'esnext', t => {
	const conf = require( '../esnext' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( 'var foo = true;\n', conf );

	t.true( errors[0].ruleId === 'no-var' );
	t.true( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'esnext w/ es2016', t => {
	const conf = require( '../esnext' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `
		const foo = async ( bar, ...baz ) => { await Promise.resolve({ bar }) };
	`, conf );

	t.true( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});

test( 'react', t => {
	const conf = require( '../react' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `import React from 'React'; const Hello = () => {}; <Hello foo="bar" foo="baz" />;\n`, conf );

	t.true( errors[0].ruleId === 'react/jsx-no-duplicate-props' );
	t.true( errors.length === 1, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'browser', t => {
	const conf = require( '../browser' );

	t.true( isPlainObj( conf ) );

	const errors = runEslint( `'use strict'; window.foo = 'bar';\n`, conf );

	t.true( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'legacy', t => {
	const conf = require( '../legacy' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `
		'use strict';
		window.foo = \'bar\';
		var foo = { bar: 123, };
		var baz = { catch: function(){ return true; } };
		baz.catch();
		var int = parseInt( '10' );
	`, conf );

	t.true( errors[0].ruleId === 'comma-dangle' );
	t.true( errors[1].ruleId === 'quote-props' );
	t.true( errors[2].ruleId === 'dot-notation' );
	t.true( errors[3].ruleId === 'radix' );

	t.true( errors.length === 4, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});


test( 'ava', t => {
	const conf = require( '../ava' );

	t.true( isPlainObj( conf ) );
	t.true( isPlainObj( conf.rules ) );

	const errors = runEslint( `
		import test from 'ava';

		test( 'foo', t => {
			t.true( true === true );
		});
	`, conf );

	t.true( errors.length === 0, `The number of errors should match an expected value. Errors found: ${errors.map( e => e.ruleId ).join( ', ' )}` );
});
