const CompanyModel = require("../Models/CompanyModel");

exports.ListCompany = async (req, res) => {
    const CompanyList = await CompanyModel.find();

    if (CompanyList.length === 0) {
        return res.json({ data: "No Records Found!!" });
    }

    return res.json({ data: CompanyList });
};

exports.AddCompany = (req, res) => {
    const { company } = req.body;
    CompanyModel.create(company);
    return res.json({ data: "Company Added.." });
};

exports.UpdateCompany = async (req, res) => {
    const id = req.params.id;
    const product = req.body.ProductIds;

    const updateCompany = await CompanyModel.findOneAndUpdate(
        { CompanyId: id },
        { ProductIds: product },
        { new: true }
    );

    console.log(JSON.stringify(updateCompany));
    res.json({ data: "Company Updated.." });
};

exports.DeleteCompany = async (req, res) => {
    const id = req.params.id;

    const deleteCompany = await CompanyModel.findOneAndDelete({ CompanyId: id });

    if (deleteCompany) {
        res.json({ data: "Company Deleted.." });
    } else {
        res.json({ data: "No Company Found!!" });
    }
};

exports.ProductWiseCompany = async (req,res)=>{
    const ProductName = req.params.name;
    const ProductModel = require("../Models/ProductModel");
    const Product = await ProductModel.findOne({ Title: ProductName });

    if(Product.length < 0){
        return res.json({data: "No Product Found!!"});
    }else{
        const Company = await CompanyModel.find({ProductIds: Product["ProductId"]});

        if(Company.length === 0){
            return res.json({data: "No Company Found"});
        }

        return res.json({data: Company});
    }
};