'use strict';

const CSS_PATTERNS = [
	'https://fonts.googleapis.com/css2?family=Noto+Sans+JP*',
	'https://fonts.googleapis.com/css?family=Noto+Sans+JP*',
	'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css*',
];

const FONT_PATTERNS = [
	'https://fonts.gstatic.com/s/notosansjp/*',
	'*://fonts.gstatic.com/ea/notosansjapanese/*',
];

function cancel(requestDetails) {
	console.log(`cancelling: ${requestDetails.url}`);
	return { cancel: true };
}

chrome.webRequest.onBeforeRequest.addListener(
	cancel,
	{
		urls: [...CSS_PATTERNS, ...FONT_PATTERNS],
		types: ['stylesheet', 'font'],
	},
	['blocking'],
);
