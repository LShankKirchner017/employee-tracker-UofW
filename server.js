require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
