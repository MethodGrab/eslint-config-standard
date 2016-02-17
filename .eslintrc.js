module.exports = {
	"env" : {
		"node"  : true,
		"mocha" : true
	},

	"rules" : {
		"quotes"       : [ 2, "single" ],
		"comma-dangle" : [ 2, "always-multiline" ],
		"key-spacing"  : [ 2, { "beforeColon" : true, "afterColon" : true, "mode" : "minimum" } ]
	}
}
