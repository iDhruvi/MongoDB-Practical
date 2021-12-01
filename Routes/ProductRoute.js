const express = require("express");
const router = express.Router();
router.use(express.json());

const ProductController = require("../Controllers/ProductController");

router.get("/", (req, res) => { res.json({ data: "Product Page" }) });

router.get("/list", ProductController.ListAllProducts);

router.post("/add", ProductController.AddProduct);

router.put("/update/:id", ProductController.UpdateProduct);

router.delete("/delete/:id", ProductController.DeleteProduct);

router.get("/company/:id", ProductController.CompanyWise);

router.get("/seller/:id", ProductController.SellerWise);

module.exports = router;