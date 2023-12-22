const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./userSchema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const Authentication = require('./authenticate.js')
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY=require('dotenv').config();
const secretKey = 'hello world';
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://bunnypowers26:pepjkeljIEfn5zgN@cluster01.egs7npg.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
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
app.post('/genai',async(req, resp)=>{
  console.log("helloiihoihohio")
  const data = req.body;
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt =`age = ${data.age}
    gender = ${data.sex}
    chest pain type (4 values)=${data.cp}
    resting blood pressure=${data.rbp}
    serum cholestoral in mg/dl=${data.sc}
    fasting blood sugar > 120 mg/dl=${data.fbs}
    resting electrocardiographic results (values 0,1,2)=${data.rer}
    maximum heart rate achieved=${data.mhr}
    exercise induced angina=${data.eia}
    oldpeak = ST depression induced by exercise relative to rest=${data.olds}
    the slope of the peak exercise ST segment=${data.st}
    number of major vessels (0-3) colored by flourosopy=${data.mvs}
    explain these terms to a patient in way they understand for the given values and short summary
    `;
    console.log("the Worldo")
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    resp.status(201).json(text);

});

// Fix the middleware to set user information on req.rootuser
// app.post("/about", Authentication, async (req, res) => {
//   console.log("Hello world");
//   console.log(req.userId);

//   if (req.userId !== "false") {
//     try {
//       const data2 = await User.findOne({ _id: req.userId });
//       console.log(data2.name);
//       console.log('world');

//       // Send JSON response using res.json()
//       throw new Error("sometihng went wrong")

//       res.json({ data: data2 });
//     } catch (error) {

//       console.log('hello1');
//       console.log(error);

//       // Handle the error and send an appropriate response
//       // res.status(500).json({ error: 'Internal Server Error' });
//     }
//     finally{
//       console.log('false');
//       // Send a response when userId is "false"
//       res.status(401).json({ error: 'Unauthorized' });
//     }
//   } else {
    
//   }
  // Change to req.user instead of req.rootuser
// });
app.post('/about', Authentication,async (req, resp) => {
  try {
    const data = req.userId;
    const user = await User.findOne({ _id: data });
    const {name}=user;
    if (!user) {
      console.log("User not found");
      return resp.status(404).send("User not found");
    }
    console.log("Login successful");
    console.log({name});
    resp.status(200).json({ name });
    console.log("Hello546")
  } catch (error) {
    console.error("Error during login:", error.message);
    resp.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
