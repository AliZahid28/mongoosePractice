const express = require('express')
const Studentrouter = require('./routers/studentsrouter')

require('./db/conn')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(Studentrouter)

app.get('/', (req, res) => {
    res.send('api is running')
})


app.listen(port, () => {
    console.log(`connection is  at port ${port}`)
})