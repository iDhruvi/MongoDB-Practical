const express = require('express');
const router = express.Router();
router.use(express.json());

const CompanyController = require("../Controllers/CompanyController");

router.get('/', (req, res) => res.send('Company Page'));

router.get('/list', CompanyController.ListCompany);

router.post('/add', CompanyController.AddCompany);

router.put('/update/:id', CompanyController.UpdateCompany);

router.delete('/delete/:id', CompanyController.DeleteCompany);

router.get('/product/:name', CompanyController.ProductWiseCompany);

module.exports = router;