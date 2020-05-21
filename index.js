const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.set("port", process.env.SERVER_PORT || 3000);
app.set("json spaces", 2);

// * middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * routes
app.use(require("./routes/index"));
app.use("/api", require("./routes/movies"));

app.listen(3000, () => {
  console.log("server on port: " + process.env.SERVER_PORT);
});
