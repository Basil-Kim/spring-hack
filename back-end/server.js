const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

// const itemRoutes = express.Router();

// itemRoutes.route("/").get(function (req, res) {
//   Item.find(function (err, items) {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(items);
//     }
//   });
// });

app.use("/fridge/items", require("./routes/itemRoutes"));

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
