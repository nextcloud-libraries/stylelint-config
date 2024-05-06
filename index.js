module.exports = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue/scss'
	],
	ignoreFiles: ['**/*.js', '**/*.ts', '**/*.svg'],
	rules: {
		// Stylistic rules conflicting with prettier
		'scss/operator-no-newline-after': null,
		'scss/operator-no-newline-before': null,

		'selector-type-no-unknown': null,
		'rule-empty-line-before': [
			'always',
			{
				ignore: ['after-comment', 'inside-block'],
			},
		],
		'declaration-empty-line-before': [
			'never',
			{
				ignore: ['after-declaration'],
			},
		],
		'comment-empty-line-before': null,
		'selector-type-case': null,
		'no-descending-specificity': null,
		'selector-pseudo-class-no-unknown': [
			true,
			{
				// vue deep pseudo-class
				ignorePseudoClasses: ['deep'],
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				// Vue deep pseudo-element
				ignorePseudoElements: ['deep'],
			},
		],
	},
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			rules: {
				'at-rule-no-unknown': null,
				'scss/at-rule-no-unknown': true,
			},
		},
	],
}
