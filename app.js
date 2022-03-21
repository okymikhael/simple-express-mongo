const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models/')
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected!`)
}).catch((err) => {
    console.log(`Error connecting to database`)
    process.exit()
})

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to home!"
    })
})

require('./app/routes/post.routes')(app)

const PORT = 8000
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})