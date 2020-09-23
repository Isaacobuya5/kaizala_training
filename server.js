const express = require('express');
const bodyParser = require("body-parser");
const logger = require('morgan');
const Customer = require("./model/customer");

require('dotenv').config();
require('./db/mongoose');
const customerRouter = require("./routers/customer");

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(bodyParser);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/customer', async (req, res) => {
    console.log(req.body);
    const customer = new Customer(req.body);
    try {
        const newCustomer = await customer.save();
        res.status(201).send(newCustomer);
    } catch(error) {
        res.status(400).send(error);
        console.log(error);
    }
});
app.use(customerRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));
