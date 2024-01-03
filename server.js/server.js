const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./userSchema");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const Authentication = require("./authenticate.js");
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const API_KEY = require("dotenv").config();
const secretKey = "hello world";
const {PythonShell}=require("python-shell")
const {spawn} = require("child_process")
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    "mongodb+srv://bunnypowers26:pepjkeljIEfn5zgN@cluster01.egs7npg.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.get("/", (req, resp) => {
  resp.send("Hello world");
});

app.post("/register", async (req, resp) => {
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

app.post("/login", async (req, resp) => {
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
app.post("/genai", async (req, resp) => {
  const data = req.body;
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `age = ${data.age}
    gender = ${data.sex}
    chest pain type (4 values)=${data.cp}
    resting blood pressure=${data.trestbps}
    serum cholestoral in mg/dl=${data.chol}
    fasting blood sugar > 120 mg/dl=${data.fbs}
    resting electrocardiographic results (values 0,1,2)=${data.restecg}
    maximum heart rate achieved=${data.thalach}
    exercise induced angina=${data.exang}
    oldpeak = ST depression induced by exercise relative to rest=${data.oldpeak}
    the slope of the peak exercise ST segment=${data.slope}
    number of major vessels (0-3) colored by flourosopy=${data.ca}
    thalassemia = ${data.thal}
    explain these terms to a patient in way they understand for the given values and short summary
    explain dieases which arise from these values 
    How to cure this problems 
    `;
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
app.post("/about", Authentication, async (req, resp) => {
  try {
    const data = req.userId;
    const user = await User.findOne({ _id: data });
    const { name } = user;
    if (!user) {
      console.log("User not found");
      return resp.status(404).send("User not found");
    }
    console.log("Login successful");
    console.log({ name });
    resp.status(200).json({ name });
    console.log("Hello546");
  } catch (error) {
    console.error("Error during login:", error.message);
    resp.status(500).send("Internal Server Error");
  }
});

app.post("/filldata", async (req, resp) => {
  try {
    const data = req.body;
    const existingUser = await User.findOne({ name: data.name });

    if (existingUser) {

      existingUser.medicalHistory = {
        age: data.medicalHistory.age,
        sex: data.medicalHistory.sex,
        cp: data.medicalHistory.cp,
        rbp: data.medicalHistory.rbp,
        sc: data.medicalHistory.sc,
        fbs: data.medicalHistory.fbs,
        rer: data.medicalHistory.rer,
        mhr: data.medicalHistory.mhr,
        eia: data.medicalHistory.eia,
        olds: data.medicalHistory.olds,
        st: data.medicalHistory.st,
        mvs: data.medicalHistory.mvs,
        thal: data.medicalHistory.thal,
        // Add more fields as needed
      };
      await existingUser.save();
      console.log("User medical history updated");
      return resp.status(200).send("User medical history updated");
    }

    // User doesn't exist, create a new user
    const user = new User({
      name: data.name,
      password: data.password,
      medicalHistory: {
        bloodType: data.medicalHistory.bloodType,
        allergies: data.medicalHistory.allergies,

        // Add more fields as needed
      },
    });

    await user.save();
    console.log("New user registered");
    resp.status(201).send("Registration successful");
  } catch (error) {
    console.error("Error during registration:", error.message);
    resp.status(500).send("Internal Server Error");
  }
});

app.post("/logout", async (req, res) => {
  try {
    // Clear the 'jwtoken' cookie with path '/'
    res.clearCookie("jwtoken", { path: "/" });

    // Log a message indicating successful logout
    console.log("User logged out successfully");

    // Optionally, you might redirect the user to a login page or send a response
    res.status(200).json({ message: "Logout successfullly" });
  } catch (error) {
    // Handle errors, if any
    console.error("Logout error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/prediction",async(req,resp)=>{
  try {
  
    const data=req.body;
    const array=data['data']
    console.log(array)
    const child=spawn('python',['prediction.py',array]);
    child.stdout.on("data",(data)=>{
      const data1=data.toString();
      resp.json(data1)
    })


  } catch (error) {
    console.log(error)
  }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
