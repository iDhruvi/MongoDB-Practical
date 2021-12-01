const mongoose = require("mongoose");
mongoose.pluralize(null);

const SellerSchema = mongoose.Schema({
    SellerId: String,
    Name: String,
    ProductIds: [{ type: String }]
});

const SellerModel = mongoose.model("Seller", SellerSchema);

module.exports = SellerModel;