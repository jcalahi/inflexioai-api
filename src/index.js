const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use(router.use("/", require("./routes")));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
