const calculator = require('./calculator');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('Adding 2 and 5, we get: ', calculator.add("2,3"))
	res.send('Server is up!');
});

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
