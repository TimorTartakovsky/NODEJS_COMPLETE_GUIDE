const fs = require('fs');

const requestHandler = (req, res) => {
	switch(req.url) {
		case '/':
			res.setHeader('Content-Type', 'text/html');
			res.write(`
					<html>
						<head>
							<title>
								Enter message
							</title>
						</head>
						<body>
							<form action="message" method="POST">
								<input type="text" name="message">
								<button type="submit">Send</button>
							</form>
						</body>
					</html>
				`);
			return res.end();
		case '/message':
			const body = [];
			req.on('data', (chunk) => {
				body.push(chunk);
			});
			return req.on('end', () => {
				const parseBuffer = Buffer.concat(body).toString();
				const message = parseBuffer.split('=')[1];
				return fs.writeFile('message.txt', message, lastdata => {
					res.statusCode = 302;
					res.setHeader('Location', '/');
					return res.end();
				});
			});
	}
}

module.exports = requestHandler;
