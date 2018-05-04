
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

//app.use(express.json());
app.set('view engine', 'ejs');

// Array to store expenses data
const expenses = [
    { id: 1, description: "Expense 1", amount: 4000.00, date: Date.now()},
    { id: 2, description: "Expense 2", amount: 1890.00, date: Date.now()},
];

app.get('/', (req, res) => {
    console.log(expenses);
    res.render('index', {expenses: expenses});
});

// Create Web Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));