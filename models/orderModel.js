const mongoose = require('mongoose')
const { model } = require('./productModel')

const orderSchema = new mongoose.Schema({

    products:[{
        type:mongoose.Types.ObjectId,
        ref:"Products",
        required:true
    }],
    bill:{
        type:Number,
        required:true
    },

})

module.exports = mongoose.model("Order", orderSchema)