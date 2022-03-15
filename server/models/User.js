const mongoose = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   match: [/.+@.+\..+/, 'Must match an email address!']
  // },
  password: {
    type: String,
    required: true,
    minLength: 4
  }
})


const User = mongoose.model('User', userSchema);

module.exports = User;