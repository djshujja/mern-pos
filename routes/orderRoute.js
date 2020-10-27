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
            const dataProduct = await Product.findOne({_id: product._id});
            dataProduct.qty = Number(dataProduct.qty) - Number(product.qty);
            await dataProduct.save()
        });
       
        console.log(order)
        await order.save()
        
        res.send(order)

    } 
    catch (error) {
        res.send(error)   
    }

})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const order = await Order.findOne({_id:id})

        if(order){

            return res.send(order)
        }
        res.send({
            message:`No order with id ${id} exists on DB`
        })

    } catch (error) {
        res.send(error)
    }
})

module.exports = router;