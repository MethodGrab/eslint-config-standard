# eslint-config-standard [![Build Status](https://travis-ci.org/MethodGrab/eslint-config-standard.svg?branch=master)](https://travis-ci.org/MethodGrab/eslint-config-standard)

My ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).  


## Install
```
npm install --save-dev @methodgrab/eslint-config-standard
```

For `babel+react`:
```
npm install --save-dev @methodgrab/eslint-config-standard babel-eslint eslint-plugin-react
```


## Usage
Extend it in your `.eslintrc.js`
```js
module.exports = {
	extends : [
		'@methodgrab/standard'
	],
	rules   : {
		// override shared config rules
	},
};
```

You can override settings from the shared config by adding them directly into your `.eslintrc.js` config.


## Additional Configs

* `strict` - less relaxed
* `esnext` - ES2015 (ES6)+
* `babel+react` - `esnext` + Babel parser + React.js rules
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
