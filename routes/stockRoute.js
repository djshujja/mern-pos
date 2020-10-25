const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const { route } = require("./productRoute");


router.get("/", async (req, res) => {
    res.send({
        meesage:"Stock Route"
    })
})

router.post('/:id', async (req, res) => {
    try {
        const {id} = req.params
       
        const newQty = req.body.qty
        const product = await Product.findOne({
            id : id
        }
        ) 
        if(product){    
            product.qty = Number(product.qty) + Number(newQty)
            product.save()

        return res.send({
                product,
                meesage: "Stock Updated!"
            })
        }
        
        res.status(404).send({
            meesage:`No product with id ${id}`
        })


    } catch (error) {
        res.send(error)
    }


})


module.exports = router;