'use strict'

assert = require( 'chai' ).assert

cfg = null


describe 'eslint-config-standard', (  ) ->

	it 'should be requireable', (  ) ->
		errored = false

		try
			cfg = require '../index'
		catch error
			errored = error

		assert.notInstanceOf( errored, Error, "it shouldn't throw error" )


	it 'should return an object', (  ) ->
		assert.isObject( cfg )


	it 'should contain rules', (  ) ->
		assert.property( cfg, 'rules' )
