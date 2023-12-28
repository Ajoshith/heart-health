const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const k = "hello_world";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,

    // Adjust the minimum length as needed
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  medicalHistory: {
    age: { type: Number },
    sex: { type: Number },
    cp: { type: Number },
    trestbps: { type: Number },
    chol: { type: Number },
    fbs: { type: Number },
    restecg: { type: Number },
    thalach: { type: Number },
    exang: { type: Number },
    oldpeak: { type: Number },
    slope: { type: Number },
    ca: { type: Number },
    thal: { type: Number },
  },
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id }, "hello world");
  this.tokens = this.tokens.concat({ token: token });
  await this.save();

  return token;
};

const User = mongoose.model("articles", userSchema);
module.exports = User;
