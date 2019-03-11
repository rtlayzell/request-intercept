// import { URL } from "url";

// // const rules = [{
// // 	name: "My rule",
// // 	description: "My rule description.",
// // 	url: "*://atlassian.com/*",
// // 	queryParams: [{
// // 		name: "useOldView",
// // 		value: "true",
// // 		action: "replace"
// // 	}]
// // }];

// const apply = (rule, request) => {
// 	const url = new URL(request.url);
// 	rule.queryParams.forEach(param => {
// 		switch (param.action) {
// 			case 'remove': { url.searchParams.delete(param.name); break; }
// 			case 'append': { url.searchParams.append(param.name, param.value); break; }
// 			case 'replace': { url.searchParams.set(param.name, param.value); break; }
// 			default: throw new Error('query parameter action not specified.');
// 		}
// 	});

// 	const redirectUrl = url.toString();
// 	if (redirectUrl !== request.url) {
// 		return { redirectUrl };
// 	}
// };

// chrome.storage.sync.get("rules", (rules) => {
// 	rules.forEach(rule => {
// 		chrome.webRequest.onBeforeRequest.addListener(
// 			(details) => apply(rule, details) || {},
// 			{ urls: [rule.url] },
// 			["background"]);
// 	});
// });