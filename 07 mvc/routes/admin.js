const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsController = require("../controllers/products");

const router = express.Router();

// 79. Sharing Data Across Requests and Users
//const products = [];


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
