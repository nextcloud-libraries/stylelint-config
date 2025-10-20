/*
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

const additionalPseudoSelectors = [
	// Vue <style scoped>
	// See: https://vuejs.org/api/sfc-css-features.html
	'deep',
	'slotted',

	// CSS Modules (including Vue <style module>)
	// See: https://github.com/css-modules/css-modules/blob/master/docs/composition.md#exceptions
	'global',
	'local',
]

module.exports = {
	extends: [
		'stylelint-config-recommended-scss',
		'stylelint-config-recommended-vue/scss'
	],
	ignoreFiles: ['**/*.js', '**/*.ts', '**/*.svg'],
	plugins: ['stylelint-use-logical'],
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
				ignorePseudoClasses: additionalPseudoSelectors,
			},
		],
		'selector-pseudo-element-no-unknown': [
			true,
			{
				ignorePseudoElements: additionalPseudoSelectors,
			},
		],

		// Consistent with ES imports
		'scss/load-partial-extension': 'always',

		// Logical properties
		'csstools/use-logical': [
			'always',
			{
				// TODO: make it an error in the next major or large release
				severity: 'warning',
				// Only lint LTR-RTL properties for now
				except: [
					// Position properties
					'top',
					'bottom',
					// Position properties with directional suffixes
					/-top$/,
					/-bottom$/,
					// also for e.g. border-bottom-color
					/-top-/,
					/-bottom-/,
					// Size properties
					'width',
					'max-width',
					'min-width',
					'height',
					'max-height',
					'min-height',
				],
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
