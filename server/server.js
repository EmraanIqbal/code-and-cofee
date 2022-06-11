const express = require("express");
// const bodyparser = require("body-parser");    its not used in new version of express
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");

const app = express();
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello Emi How are you");
});

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
