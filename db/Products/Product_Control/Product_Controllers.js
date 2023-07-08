const productModel = require('../Product_Modal')

const HandleNewProduct = async (req, res) => {
    let product = new productModel(req.body);
    let result = await product.save();
    res.send(result);
}

const HandleGetProducts = async (req, res) => {
    let product = productModel.find();
    let result = await product;
    if(result.length>0) {
        res.send(result);
    }else {
        res.status(404).json({
            Message: "No products in this space",
            success: false,
            statusCode: 404,
            result
        });
    }
}   


const HandleDeleteProduct =  async (req, res) => {
    let product = productModel.find();
    let result = await product.deleteOne({ _id: req.params.id });
    res.send(result)
}

const HandleGetProduct = async (req, res) => {
    let product = productModel.find();
    let result = await product.findOne({ _id: req.params.id })
    if (result) {
        res.send(result)
    } else {
        res.send({ "result": "No Record Found." })
    }
}

const HandleupdateProduct = async (req, res) => {
    let product = productModel.find();
    let result = await product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    res.send(result)
};

const HandleSearch = async (req, resp) => {
    let result = await Product.find({
        "$or": [
            {
                name: { $regex: req.params.key }  
            },
            {
                company: { $regex: req.params.key }
            },
            {
                category: { $regex: req.params.key }
            }
        ]
    });
    resp.send(result);
}



module.exports = {
    HandleNewProduct,
    HandleGetProducts,
    HandleGetProduct,
    HandleDeleteProduct,
    HandleupdateProduct,
    HandleSearch
}