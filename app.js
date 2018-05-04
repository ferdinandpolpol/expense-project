
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.json());

// Array to store expenses data
const expenses = [];

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/views/index.html', 'utf8', (err, data) => {
        if(err) throw err;
        res.end(data);
    });
});

// Create Web Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));