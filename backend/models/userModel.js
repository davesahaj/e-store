const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minlength: [3, "Name should have more than 3 characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Name"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid Email Address"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
    minlength: [8, "Password should be greater than 8 characters"],
    select: false,
  },

  avatar: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },

  role: {
    type: String,
    default: "user",
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});

//JWT Token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Passwords

userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcryptjs.compare(enteredPassword, this.password);
};

// Generate Password reset token

userSchema.methods.getResetPasswordToken = function () {
  // Generate Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding to user schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

//export module
module.exports = mongoose.model("User", userSchema);
