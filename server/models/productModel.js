const mongoose = require('mongoose');

const productScheam = require('../schema/productSchema')


const product = mongoose.model("product", productScheam)

module.exports = product