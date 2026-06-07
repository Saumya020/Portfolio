
const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => {
    console.log("MongoDB Connected");
})

.catch((err) => {
    console.log(err);
});
//route

app.post("/contact", async (req, res) => {

    try {

        console.log(req.body);

        const newContact = new Contact({

            name: req.body.name,

            email: req.body.email,

            message: req.body.message

        });

        await newContact.save();

        console.log("Data Saved");

        res.status(200).json({
            message: "Thank you for messaging!"
        });

    }

    catch (error) {

        console.log("ERROR:", error);

        res.status(500).json({
            message: "Error saving message"
        });

    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});