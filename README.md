# eslint-config-standard [![Build Status](https://travis-ci.org/MethodGrab/eslint-config-standard.svg?branch=master)](https://travis-ci.org/MethodGrab/eslint-config-standard)

My ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).  


## Install
```
npm install --save-dev @methodgrab/eslint-config-standard
```

For `esnext` with [certain non-finalised features](https://github.com/babel/babel-eslint#readme) `babel-eslint` will be needed as well:
```
npm install --save-dev @methodgrab/eslint-config-standard babel-eslint
```

For `react`:
```
npm install --save-dev @methodgrab/eslint-config-standard babel-eslint eslint-plugin-react
```

For `ava`:
```
npm install --save-dev @methodgrab/eslint-config-standard eslint-plugin-ava
```


## Usage
Extend it in your `.eslintrc.js`
```js
module.exports = {
	extends : [
		'@methodgrab/standard',
	],

	rules : {
		// override shared config rules
	},
};
```

The default ESLint parser has good support for ES2015+ built in. The `babel-eslint` parser is only required if your code includes [certain non-finalised features](https://github.com/babel/babel-eslint#readme).
```js
module.exports = {
	extends : [
		'@methodgrab/standard',
		'@methodgrab/standard/esnext',
	],

	parser : 'babel-eslint',

	rules : {},
};
```

You can override settings from the shared config by adding them directly into your `.eslintrc.js` config.


## Additional Configs

* `strict` - less relaxed
* `esnext` - ES2015 (ES6)+
* `react` - `esnext` + React.js rules
* `ava` - `esnext` + AVA rules
* `browser` - browser env
* `legacy` - `browser` + ES3

Example:
```js
module.exports = {
	extends : [
		'@methodgrab/standard',
		'@methodgrab/standard/esnext',
	]
};
```
