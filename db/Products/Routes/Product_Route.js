const express = require("express");
const route = express.Router();


const {
    HandleNewProduct,
    HandleGetProducts,
    HandleGetProduct,
    HandleDeleteProduct,
    HandleupdateProduct
} = require("../Product_Control/Product_Controllers")

route.post('/addproduct', HandleNewProduct)
route.get('/products', HandleGetProducts)
route.delete("/product/:id", HandleDeleteProduct),

route.get("/product/:id", HandleGetProduct)

route.put("/product/:id", HandleupdateProduct);

// route.put("/product/:id", async (req, resp) => {
//     let result = await Product.updateOne(
//         { _id: req.params.id },
//         { $set: req.body }
//     )
//     resp.send(result)
// });


module.exports = route