module.exports = {
	"extends": "@comp500/eslint-config/es5",
	"rules": {
		// ECMAScript 6
		"arrow-parens": "warn",
		"arrow-spacing": "warn",
		"generator-star-spacing": ["error", "after"],
		"no-confusing-arrow": "error",
		"no-duplicate-imports": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"rest-spread-spacing": "error"
	}
};