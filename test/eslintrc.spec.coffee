'use strict'

assert    = require( 'chai' ).assert
eslint    = require 'eslint'
tempWrite = require 'temp-write'


runEslint = ( str, conf ) ->
	linter = new eslint.CLIEngine(
		useEslintrc : false,
		configFile  : tempWrite.sync( JSON.stringify( conf ) )
	)

	return linter.executeOnText( str ).results[0].messages


describe 'eslint-config-standard', ->

	configs = [
		'index'
		'strict'
		'es2015'
		'babel+react'
		'browser'
		'legacy'
	]

	configs.forEach ( config ) ->

		describe "#{config}.js", ->

			conf = null

			@timeout 5000

			it 'should be requireable', ->
				errored = false

				try
					conf = require "../#{config}"
				catch error
					errored = error

				assert.notInstanceOf( errored, Error, 'it should not throw an error' )


			it 'should return an object', ->
				assert.isObject( conf )


			it 'should contain rules', ->
				assert.property( conf, 'rules' )


			it 'should run without errors', ->
				errors = runEslint( '\'use strict\';', conf )

				if errors.length
					messages = errors.map ( err ) ->
						return err.message
					messages = messages.join( ', ' )
					console.log( errors )

				assert.isUndefined( messages, 'eslint errors found' )


			if config == 'legacy'
				it 'should be ES3 compatible', ->
					errors = runEslint(
						'''
						'use strict';
						var foo = { bar: 123, };
						var baz = { catch: function(){ return true; } };
						baz.catch();
						var int = parseInt( '10' );
						'''
					, conf )

					assert.equal( errors[0].message, 'Unexpected trailing comma.' )
					assert.equal( errors[1].message, 'Unquoted reserved word \'catch\' used as key.' )
					assert.equal( errors[2].message, '.catch is a syntax error.' )
					assert.equal( errors[3].message, 'Missing radix parameter.' )

					assert.equal( errors.length, 4, "Expected 4 errors, found #{errors.length}" )
