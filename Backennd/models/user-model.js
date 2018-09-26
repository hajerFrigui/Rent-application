const mongoose = require("mongoose");
//data structure ili nista3mlouha hna : schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String
});

// user louta is the name of l collection
// userSchema hia squlette mta3na!
const User = mongoose.model("user", userSchema);

module.exports = User;
