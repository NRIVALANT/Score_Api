//app
const express = require("express")
const mongoose = require("mongoose")
const compression = require("compression")

const app = express();

app.use(compression());
const apiRoutes = require("./routes/route")
app.use("/", apiRoutes)

