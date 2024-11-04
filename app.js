const express = require('express')
const app = express()

app.use(express.static('public'))

require('dotenv').config()
const HOST = process.env.HOST
const PORT = process.env.PORT

const postsRouter = require('./router/posts.js')

app.listen(PORT, (req, res) => {
    console.log(`server is running in at ${HOST}:${PORT}`);

})

app.use('/', postsRouter);

app.get('/', (req, res) => {
    res.send('Posts page')
})