import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey('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');

async function sendEmail(req, res) {
	// Get data submitted in request's body.
	const body = req.body;

	// Optional logging to see the responses
	// in the command line where next.js app is running.
	console.log('body: ', body);

	if (!body.firstName) {
		// Sends a HTTP bad request error code
		//return res.status(400).json({ data: 'First name not found' });
	}

	// Found the name.
	// Sends a HTTP success code
	//res.status(200).json({ data: `${body.firstName} ${body.secondName} ${body.title} ${body.email} ${body.message}` });

	try {
		// console.log("REQ.BODY", req.body);
		await sendgrid.send({
			to: 'mfranjic995@gmail.com', // Your email where you'll receive emails
			from: 'aziriontweb@gmail.com', // your website email address here
			subject: `${body.message}`,
			html: `<div>You've got a mail</div>`,
		});
	} catch (error) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message });
	}

	return res.status(200).json({ error: '' });
}

export default sendEmail;
