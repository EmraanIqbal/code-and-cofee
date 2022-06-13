const express = require("express");
const bodyparser = require("body-parser"); //  its not used in new version of express
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const morgan = require("morgan");

const excercisesRouter = require("./routes/excercises");
const usersRouter = require("./routes/users");

const app = express();
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 5000;

connectDb();
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyparser.json());
// app.use(express.json());

app.use("/excercises", excercisesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
