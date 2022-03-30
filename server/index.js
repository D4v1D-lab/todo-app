// @ts-check
const users = require("./routes/users");
const credentials = require("./routes/credentials");
const connection = require('./db');
const cors = require("cors");
const express = require('express');
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/users", users);
app.use("/api/credentials", credentials);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Success! Your application is running on port ${port}.`))


