require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL).then(() => console.log("Mongo Connected"));

const ProductRoute = require("./Routes/ProductRoute");
const CompanyRoute = require("./Routes/CompanyRoute");
const SellerRoute = require("./Routes/SellerRoute");

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/Product', ProductRoute);

app.use('/Company', CompanyRoute);

app.use('/Seller', SellerRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));