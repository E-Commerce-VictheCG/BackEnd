const mongoose =  require("mongoose")
const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send('WELCOME')
// })
const connectDB = (async() => {
    mongoose.connect("mongodb://localhost:27017/e-comm")

    const productSchema = new mongoose.Shema({})
    const product = mongoose.model("products",productSchema)
    const data = await product.find()

})

connectDB
app.listen(3100, () => {
    console.log('Server is up and running')
})  