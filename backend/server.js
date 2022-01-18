require('dotenv').config()
const passport = require('passport')

const express = require('express')
const cors = require("cors")
const Router = require("./routes/routes")
require('./config/database')
const { Client } = require('coinbase-commerce-node')

Client.init(process.env.COINBASE_API_KEY)

const app = express()

app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use("/api", Router)

app.listen(process.env.PORT || 4000, process.env.HOST || '0.0.0.0', () => { console.log("Server listening") })
