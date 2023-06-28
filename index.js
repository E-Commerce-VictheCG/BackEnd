require("./db/config");
const mongoose =  require("mongoose")
const express = require('express')
const userRoute = require('./db/Users/Routes/user_routes')
// const User = require("./db/userModel");
const cors =  require("cors")
const User = require("./db/userModal");



const app = express()
app.use(express.json());
app.use(cors())

app.use("/auth", userRoute)

app.post('/register', async (req, res) => {
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
})
app.get('/', (req, res) => {
    res.send('WELCOME')
})

app.get('/', (req, res) => {

    res.send("Welome!!!")
})


// const connectDB = (async() => {
//     mongoose.connect("mongodb://localhost:27017/e-comm")

//     const productSchema = new mongoose.Shema({})
//     const product = mongoose.model("products",productSchema)
//     const data = await product.find()

// })

// connectDB
app.listen(8000, () => {
    console.log('Server is up and running')
})  