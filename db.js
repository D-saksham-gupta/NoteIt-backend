const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://saksham:13022003@cluster0.je8pcpz.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  });
};

module.exports = connectToMongo;
