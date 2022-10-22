//decalre variable
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
require("dotenv").config();

//midleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParse: true }, () =>
  console.log("Connected to db")
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
