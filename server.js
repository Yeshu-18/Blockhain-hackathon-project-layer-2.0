const express = require('express');
const Blockchain = require('./blockchain');
const path = require('path');

const app = express();
const blockchain = new Blockchain();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// Your existing routes...

app.listen(3000, () => console.log('Server running on port 3000'));
