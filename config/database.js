//DATABASE CONNECTION
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://sidraalia008:2EacoAO4GIb9OSQd@cluster0.f9uf2df.mongodb.net/`)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  }); 