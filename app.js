const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use("/products", productRoute);

let connection =
  "mongodb+srv://testapp:shujja@cluster0.lzutz.mongodb.net/react?retryWrites=true&w=majority";

mongoose
  .connect(process.env.MONGO_URL || connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((e) => console.log(e));

app.listen(process.env.PORT || 9000, () => {
  console.log("Server Started");
});
