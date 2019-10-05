require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-iaygp.gcp.mongodb.net/omnistack9?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(routes)
app.listen(3333)