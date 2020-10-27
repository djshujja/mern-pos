const mongoose = require('mongoose')
const { model } = require('./productModel')

const orderSchema = new mongoose.Schema({

    products:[
     {
         _id:{
                type:mongoose.Types.ObjectId,
                ref:"Products",
                required:true
         },
         name:{
             type:String,
             required:true
         },
         qty:{
             type:Number,
             required:true
         },
         unitPrice:{
             type:Number,
             required:true
         }
     }   
    ],
    bill:{
        type:Number,
        required:true
    },


})

module.exports = mongoose.model("Order", orderSchema)