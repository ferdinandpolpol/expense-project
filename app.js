
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

//app.use(express.json());
app.set('view engine', 'ejs');

// Array to store expenses data
// pre-made values for example purposes
const expenses = [
    { id: 1, description: "Expense 1", amount: 4000.00, date: Date.now()},
    { id: 2, description: "Expense 2", amount: 1890.00, date: Date.now()},
];

app.get('/', (req, res) => {
    // Passes the expenses variable to show it to the View
    res.render('index', {expenses: expenses});
});

app.post('/', urlencodedParser, (req, res) => {
    // Stores the HTML Form values to expense variable
    const expense = {
        id: expenses.length + 1,
        description: req.body.description,
        amount: parseFloat(req.body.amount),
        date: req.body.date,
    }
    expenses.push(expense);

    res.render('index', {expenses: expenses});
});

// Create Web Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));