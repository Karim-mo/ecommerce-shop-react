import asyncHandler from 'express-async-handler';
import paypal from '@paypal/checkout-server-sdk';
import payPalClient from '../paypal.js';

export const handleRequest = asyncHandler(async (req, res) => {
	const request = new paypal.orders.OrdersCreateRequest();
	request.prefer('return=representation');
	request.requestBody({
		intent: 'CAPTURE',
		purchase_units: [
			{
				amount: {
					currency_code: 'USD',
					value: '220.00',
				},
			},
		],
	});

	let order;
	try {
		order = await payPalClient.client().execute(request);
	} catch (err) {
		console.error(err);
		return res.send(500);
	}

	res.status(200).json({
		orderID: order.result.id,
	});
});
