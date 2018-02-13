module.exports = {
	"extends": "eslint:reccomended",
	"rules": {
		// Possible Errors
		"no-console": "warn",
		"no-template-curly-in-string": "error",
		"valid-jsdoc": "warn",
		// Best Practices
		"array-callback-return": "error",
		"dot-notation": "warn",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-lone-blocks": "error",
		"no-multi-spaces": "warn",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-return-await": "warn",
		"no-script-url": "warn",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "warn",
		"no-unused-expressions": "warn",
		"no-useless-call": "warn",
		"no-useless-concat": "warn",
		"no-useless-return": "warn",
		"no-void": "error",
		"no-with": "warn",
		"yoda": ["error", {"exceptRange": true}],
		// Variables
		"no-shadow": "warn",
		"no-shadow-restricted-names": "error",
		"no-undef-init": "warn",
		// Node.js and CommonJS
		"callback-return": "warn"
	}
};