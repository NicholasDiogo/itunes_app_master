const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require('helmet')

var fetchRouter = require("./routes/fetch");

app.use(cors());
app.use(helmet())

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/", fetchRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
