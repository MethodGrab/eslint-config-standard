# ESLint Config

My ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs).  
Requires `eslint >= 0.21.2` ([eslint#2544](https://github.com/eslint/eslint/issues/2544)).

## Install
```
npm install --save-dev @methodgrab/eslint-config-standard
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
* modern - drops ES3 support
* strict - less relaxed

Example usage:
```
{
	"extends" : "@methodgrab/eslint-config-standard/modern"
}
```
**NB: The `eslint-config-` prefix is required for sub-configs**
