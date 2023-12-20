const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./userSchema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Authentication = require('./authenticate.js')
const app = express();
const secretKey = 'hello world';

app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://bunnypowers26:PN59fC4bTt0oETi1@cluster0.kzqiblt.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get('/', (req, resp) => {
  resp.send("Hello world");
});

app.post('/register', async (req, resp) => {
  try {
    const data = req.body;
    const existingUser = await User.findOne({ name: data.name });

    if (existingUser) {
      console.log("User name already taken");
      return resp.status(409).send("User name already taken");
    }

    const user = new User({
      name: data.name,
      password: data.password,
    });
    await user.save();
    console.log("New user registered");
    resp.status(201).send("Registration successful");
  } catch (error) {
    console.error("Error during registration:", error.message);
    resp.status(500).send("Internal Server Error");
  }
});

app.post('/login', async (req, resp) => {
  try {
    const data = req.body;
    const user = await User.findOne({ name: data.name });

    if (!user) {
      console.log("User not found");
      return resp.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      console.log("Invalid Credentials");
      return resp.status(401).send("Invalid Credentials");
    }

    const token = await user.generateAuthToken();
    console.log(token);

    resp.cookie("jwtoken", token, {
      expires: new Date(Date.now() + 36000000),
      httpOnly: true,
    });

    console.log("Login successful");
    resp.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error.message);
    resp.status(500).send("Internal Server Error");
  }
});

// Fix the middleware to set user information on req.rootuser
app.post("/about", Authentication, async (req, res) => {
  console.log("Hello world");
  console.log(req.userId);

  if (req.userId !== "false") {
    try {
      const data2 = await User.findOne({ _id: req.userId });
      console.log(data2.name);
      console.log('world');

      // Send JSON response using res.json()
      throw new Error("sometihng went wrong")

      res.json({ data: data2 });
    } catch (error) {

      console.log('hello1');
      console.log(error);

      // Handle the error and send an appropriate response
      // res.status(500).json({ error: 'Internal Server Error' });
    }
    finally{
      console.log('false');
      // Send a response when userId is "false"
      res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    
  }
  // Change to req.user instead of req.rootuser
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
