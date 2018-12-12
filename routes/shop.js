const express =  require('express');
const router  = express.Router();
const path  = require('path');
const rootDir = require('../utils/path');

router.get('/', (req, res) => {
	res.sendFile(`${path.join(rootDir, 'views', 'shop.html')}`);
	// res.send("<h1>Hello this is my main page</h1>");
});

module.exports = router;