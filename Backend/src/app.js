const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

const allowedOrigins = ['hhtp://localhost:5173']

app.use(cors({origin:allowedOrigins,credentials:true}))


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app