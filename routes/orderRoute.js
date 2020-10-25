const express = require("express");
const router = express.Router();
const Order = require('../models/orderModel')
const Product = require("../models/productModel");

//All Orders

router.get('/', async (req, res) => {
    
    try {
        const orders = await Order.find({}).populate("products")
        res.send(orders)
    } catch (error) {
        res.status(500).send(error)
    }
})



router.post('/', async (req, res) => {
   try {
       
        const {products, bill } = req.body
        let order = new Order({
            products: products,
            bill:bill
        })
        
         products.forEach(async product => {
            const abc = await Product.findOne({_id: product})
            console.log(abc)
        });
       

        await order.save()
        
        res.send(order)

    } 
    catch (error) {
        res.send(error)   
    }

})


module.exports = router;