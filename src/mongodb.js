const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/LoginFormPractice")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("failed to connect Mongo :", e);
  });

const logInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const LogInCollection = new mongoose.model("LogInCollection", logInSchema);

module.exports = LogInCollection;
