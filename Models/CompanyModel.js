const mongoose = require("mongoose");
mongoose.pluralize(null);

const CompanySchema = mongoose.Schema({
    CompanyId: String,
    Name: String,
    ProductIds: [{ type: String }]
});

const CompanyModel = mongoose.model("Company", CompanySchema);

module.exports = CompanyModel;