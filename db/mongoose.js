
const mongoose = require("mongoose");


mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Connected to mongo db succesfully"))
  .catch(error => console.log(error));