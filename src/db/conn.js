// import mongoose from "mongoose";
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:root@cluster0.0qiansv.mongodb.net/", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`mongodb connected`);
  })
  .catch((e) => {
    console.log(`not connected`);
  });
