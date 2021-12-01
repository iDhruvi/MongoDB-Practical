const SellerModel = require("../Models/SellerModel");

exports.ListSeller = async (req, res) => {
    const SellerList = await SellerModel.find();

    if (SellerList.length === 0) {
        return res.json({ data: "No Records Found!!" });
    }

    return res.json({ data: SellerList });
};

exports.AddSeller = (req, res) => {
    const { seller } = req.body;
    SellerModel.create(seller);
    return res.json({ data: "Seller Added.." });
};

exports.UpdateSeller = async (req, res) => {
    const id = req.params.id;
    const product = req.body.ProductIds;

    const updateSeller = await SellerModel.findOneAndUpdate(
        { SellerId: id },
        { ProductIds: product },
        { new: true }
    );

    console.log(JSON.stringify(updateSeller));
    res.json({ data: "Seller Updated.." });
};

exports.DeleteSeller = async (req, res) => {
    const id = req.params.id;

    const deleteSeller = await SellerModel.findOneAndDelete({ SellerId: id });

    if (deleteSeller) {
        res.json({ data: "Seller Deleted.." });
    } else {
        res.json({ data: "No Seller Found!!" });
    }
};

exports.ProductWiseSeller = async (req, res) => {
    const ProductName = req.params.name;
    const ProductModel = require("../Models/ProductModel");
    const Product = await ProductModel.findOne({ Title: ProductName });

    if(Product.length < 0){
        return res.json({data: "No Product Found!!"});
    }else{
        const Seller = await SellerModel.find({ProductIds : Product["ProductId"]});

        if(Seller.length === 0){
            return res.json({data: "No Seller Found"});
        }

        return res.json({data: Seller});
    }
};