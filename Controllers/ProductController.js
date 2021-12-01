const ProductModel = require("../Models/ProductModel");

exports.ListAllProducts = async (req, res) => {
    const ProductList = await ProductModel.find();

    if (ProductList.length === 0) {
        return res.json({ data: "No Records Found!!" });
    }

    return res.json({ data: ProductList });
};

exports.AddProduct = (req, res) => {
    const { product } = req.body;
    ProductModel.create(product);
    return res.json({ data: "Product Added.." });
};

exports.UpdateProduct = async (req, res) => {
    const id = req.params.id;
    const category = req.body.Category;

    const updateProduct = await ProductModel.findOneAndUpdate(
        { ProductId: id },
        { Category: category },
        { new: true }
    );

    console.log(JSON.stringify(updateProduct));
    return res.json({ data: "Product Updated Successfully.." });
};

exports.DeleteProduct = async (req, res) => {
    const id = req.params.id;

    const deleteProduct = await ProductModel.findOneAndDelete({ ProductId: id });
    if (deleteProduct) {
        return res.json({ data: "Product Deleted.." });
    } else {
        return res.json({ data: "Product Not Found!!" });
    }
};

exports.CompanyWise = async (req, res) => {
    const id = req.params.id;

    const Products = await ProductModel.find({ CompanyId: id });
    return res.json({ data: Products });
};

exports.SellerWise = async (req, res) => {
    const id = req.params.id;

    const Products = await ProductModel.find({ SellerId: id });
    return res.json({ data: Products });
};