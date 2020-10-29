const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({})

    if (products != "") {
      return res.send({
        products,
        message: "All products",
      });
    }
    res.send({
      message: "No products on database! ;c",
    });
    
  } catch (error) {
    res.status(500).send({
      message: "Error occured!",
      error: error,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    let { id, name, unitPrice } = req.body;
    const newProduct = new Product({
      id: id,
      name: name,
      unitPrice:unitPrice
    });

    await newProduct.save();

    res.send({
      newProduct,
      message: "Product has been saved on db c:",
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occured!",
      error: error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      id: id,
    });
    if (product != "") {
      await product.remove();
      return res.send({
        product,
        message: `Product with id ${id} has been deleted!`,
      });
    }
    res.status(404).send({
      message: `No product with id ${id} exists on DB! :c`,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error Occured! :c",
      error: error,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let product = await Product.findOne({
      id: id,
    });

    if (product) {
      return  res.send(product);
    }

    res.status(404).send({
      message: `No product with id ${id} exists on db! ;c`,
    });

  } 
  catch (error) {
    res.send(error)  
  }
});

router.put("/:prodId", async (req, res) => {
  try {
    const { prodId } = req.params;
    const { id, name } = req.body;
    const product = await Product.findOneAndUpdate(
      {
        prodId: id,
      },
      {
        id: id,
        name: name,
      }
    );
    if (product != "") {
      await product.save();
      return res.send({
        product,
        message: `Product with id = ${id} has been succefully updated!`,
      });
    }
    res.status(404).send({
      message: `No product with id ${id} exists on db! :c `,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error occured",
      error: error,
    });
  }
});



module.exports = router;
