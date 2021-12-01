const express = require('express');
const router = express.Router();
router.use(express.json());

const SellerController = require("../Controllers/SellerController");

router.get('/', (req, res) => res.send('Seller Page'));

router.get('/list', SellerController.ListSeller);

router.post('/add', SellerController.AddSeller);

router.put('/update/:id', SellerController.UpdateSeller);

router.delete('/delete/:id', SellerController.DeleteSeller);

router.get('/product/:name', SellerController.ProductWiseSeller);

module.exports = router;