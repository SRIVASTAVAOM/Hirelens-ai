const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("HireLens AI Backend Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});