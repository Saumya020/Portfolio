const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Contact = require("../models/Contact");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Backend Running");
});

app.post("/contact", async (req, res) => {

    try {

        const newContact = new Contact(req.body);

        await newContact.save();

        res.json({
            message: "Thank you for messaging!"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error saving message"
        });

    }

});

module.exports = app;