const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const {MONGO_URI} = process.env;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/notesRoute"));

mongoose.connect(MONGO_URI)


app.listen(4001, () => {
    console.log("Express server is running on port 4001");
})