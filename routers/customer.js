
const express = require("express");

const Customer = require("../model/customer");

// creating a new router
const router = express.Router();

// create a new customer
router.post("/customer", async (req, res) => {
  const customer = new Customer(req.body);
  try {
    const newCustomer = await customer.save();
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

// get all customers
router.get("/customers", async (req, res) => {
  try {
    if (req.query && req.query.phone) {
      // find user with the given phone number
      const existingUser = await Customer.find({ phone: req.query.phone });
      return res.status(200).send(existingUser);
    } else {
      const customers = await Customer.find({});
      res.status(200).send({ customers });
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
