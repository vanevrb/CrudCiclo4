const mongoose = require("../conn");

var Schema = mongoose.Schema;

var productsSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    category: Number,
    st:Boolean

},{collection:'products'});

var ProductData = mongoose.model('ProductData',productsSchema);

module.exports = ProductData;