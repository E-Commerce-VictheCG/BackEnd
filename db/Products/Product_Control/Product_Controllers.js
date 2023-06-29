const productModel = require('../Product_Modal')

const HandleNewProduct = async (req, res) => {
    let product = new productModel(req.body)
    let result = await product.save()
    res.send(result)
}

module.exports = {HandleNewProduct}