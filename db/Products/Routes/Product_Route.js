const express = require("express");
const route = express.Router();


const {HandleNewProduct} = require("../Product_Control/Product_Controllers")

route.post('/addproduct', HandleNewProduct)

module.exports = route