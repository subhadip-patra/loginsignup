const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;
