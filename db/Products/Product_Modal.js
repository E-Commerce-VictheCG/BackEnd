const mongoose = require("mongoose")

const productSchema = new mongoose.Schema ({
    name : {
        type: String
    },
    price: String,
    userID: String,
    category: String,
    company: String
})

module.exports = mongoose.model("products", productSchema)