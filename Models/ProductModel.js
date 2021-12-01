const mongoose = require("mongoose");
mongoose.pluralize(null);

const ProductSchema = mongoose.Schema({
    ProductId: String,
    Title: String,
    Price: String,
    Category: [{ type: String }],
    CompanyId: String,
    SellerId: [{ type: String }]
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;