module.exports = {
	extends : [
		'../index.js',
		'../ava.js',
	],

	rules : {
		'global-require' : 'off',
		'ava/max-asserts': 'off',
	},
};
