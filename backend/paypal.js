/**
 *
 * PayPal Node JS SDK dependency
 */
import core from '@paypal/checkout-server-sdk';

/**
 *
 * Returns PayPal HTTP client instance with environment that has access
 * credentials context. Use this instance to invoke PayPal APIs, provided the
 * credentials have access.
 */
function client() {
	return new core.PayPalHttpClient(environment());
}

/**
 *
 * Set up and return PayPal JavaScript SDK environment with PayPal access credentials.
 * This sample uses SandboxEnvironment. In production, use LiveEnvironment.
 *
 */
function environment() {
	let clientId =
		process.env.PAYPAL_CLIENT_ID ||
		'AYabUNTBek_sggJbG6QVirNx0Ymh-Tfx20mLhgGKxH0hUDhwKvdE1vyMnh3SFEYTWCL1QpEEHVtQgeIQ';
	let clientSecret =
		process.env.PAYPAL_CLIENT_SECRET ||
		'EGBiZsq5jQdfkhsybB3b5Ta4IFf4G_p5WbEsBJ5CK3ZmrrEslyyT5tMtrhy59ZLQ2UkxxkDKRpGRi_7D';

	return new core.SandboxEnvironment(clientId, clientSecret);
}

// async function prettyPrint(jsonData, pre = '') {
// 	let pretty = '';
// 	function capitalize(string) {
// 		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// 	}
// 	for (let key in jsonData) {
// 		if (jsonData.hasOwnProperty(key)) {
// 			if (isNaN(key)) pretty += pre + capitalize(key) + ': ';
// 			else pretty += pre + (parseInt(key) + 1) + ': ';
// 			if (typeof jsonData[key] === 'object') {
// 				pretty += '\n';
// 				pretty += await prettyPrint(jsonData[key], pre + '    ');
// 			} else {
// 				pretty += jsonData[key] + '\n';
// 			}
// 		}
// 	}
// 	return pretty;
// }

export default client;
// export const prettyPrint = prettyPrint;
