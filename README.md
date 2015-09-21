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
Extend it in your `.eslintrc`
```
{
	"extends" : "@methodgrab/standard",
	"rules"   : {
		// override shared config rules
	}
}
```

You can override settings from the shared config by adding them directly into your own .eslintrc file.


## Additional Configs
In addition to the default config, there are others than can be used that extend the default config:
* `strict` - less relaxed
* `es2015` - ES2015 (ES6)
* `babel+react` - `es2015` + Babel parser + React.js rules
* `browser` - browser env
* `legacy` - `browser` + ES3 support

Example usage:
```
{
	"extends" : "@methodgrab/standard/browser"
}
```
