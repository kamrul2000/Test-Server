const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const userModel = require('./model/userModel');
const app = express();
const port = 3003;


//midleware
app.use(cors())
app.use(express.json())

const mongoURL = `mongodb+srv://kamrul:12345@cluster0.hywbw3x.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

app.get('/', (req, res) => {
    res.send('hellooo node world! ');
});

app.post('/signup', async (req, res) => {
    //res.send(req)

    let userInfo = new userModel(req.body)
    let user = await userInfo.save()

    res.send(user);
});


app.post('/login', async (req, res) => {
    //res.send(req)
    const { email, password } = req.body
    let isUser = await userModel.find({ email })
    console.log(isUser)
    if (isUser) {
        if (isUser[0]?.password === password) {
            res.send({ message: "Login Successfull" })
        } else {
            res.send({ message: "invalid password" })
        }
    } else {
        res.send({ message: "invalid Email" })
    }


    // res.send(user);
});




app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`);
});


