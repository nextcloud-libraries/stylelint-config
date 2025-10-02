/*!
 * SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/** @type {import('stylelint').Config} */
module.exports = {
	extends: [
		'./configs/linting.js',
		'./configs/formatting.js',
	],
	ignoreFiles: ['**/*.js', '**/*.ts', '**/*.svg'],
}
