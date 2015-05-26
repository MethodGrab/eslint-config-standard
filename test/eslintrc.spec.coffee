'use strict'

assert   = require( 'chai' ).assert

eslintrc = null


describe 'eslint-config-standard', ->

	configs = [ 'index', 'modern', 'strict' ]

	configs.forEach ( config ) ->

		describe "#{config}", ->

			it 'should be requireable', ->
				errored = false

				try
					eslintrc = require "../#{config}"
				catch error
					errored = error

				assert.notInstanceOf( errored, Error, "it shouldn't throw error" )


			it 'should return an object', ->
				assert.isObject( eslintrc )


			it 'should contain rules', ->
				assert.property( eslintrc, 'rules' )
