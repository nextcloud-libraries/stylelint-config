/*!
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @type {import('stylelint').Config} */
module.exports = {
	plugins: ['@stylistic/stylelint-plugin'],
	extends: ['@stylistic/stylelint-config'],
	rules: {
		// overrides to comply with config v3
		'@stylistic/indentation': 'tab',
		'@stylistic/string-quotes': 'single',
		'@stylistic/selector-list-comma-newline-after': 'always-multi-line',
	}
}
