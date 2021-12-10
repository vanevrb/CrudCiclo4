const express = require("express");
const routes = express.Router();

//Model Products 
var ProductData= require("../models/modelProduct.js");

routes.get('/',(req,res)=>{
    ProductData.find().
    then(function(doc){
        res.json(doc)
    })
})
routes.get('/:id',async (req,res)=>{
    await ProductData.find({_id:req.params.id}).
    then(function(doc){
        res.json(doc)
    })
})
routes.post("/",async (req,res) =>{
    var product = new ProductData({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        st:req.body.st
    });
    await product.save();
    res.send(product);
})
routes.put('/',async (req,res) =>{
    await ProductData.findOneAndUpdate({
        _id: req.body._id,
    },{
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        st:req.body.st
    });
    res.send(200).end();
});
routes.delete('/:id',async (req,res) =>{
    await ProductData.findOneAndDelete(
        { _id: req.params.id}
        );
    res.send(true);
})
module.exports = routes;