
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.json());

// Array to store expenses data
const expenses = [];

// Create Web Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));