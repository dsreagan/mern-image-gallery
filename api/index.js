const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const dotenv = require('dotenv')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

dotenv.config()

mongoose.connect(process.env.MONGO_URL
).then(() => console.log('DB Connection Successful')
).catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(express.json())
app.use('', authRoutes)
app.use('', userRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening at http://localhost:${port}`)
})