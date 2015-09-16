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

	configs = [ 'index', 'strict', 'browser', 'legacy' ]

	configs.forEach ( config ) ->

		describe "#{config}", ->

			conf = null

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
