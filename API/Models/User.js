const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    maxLength: 12,
  },
  password: {
    type: String,
    maxLength: 12,
  },
});

module.exports = mongoose.model("Users", UserSchema);
