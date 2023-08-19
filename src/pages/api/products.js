// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import product from "../../../model/productScehma";
import mongoInit from "../../../helper/mongoinit";
mongoInit();

const getAndSendProduct = async (req, res) => {
  switch (req.method) {
    case "GET":
      await getAllProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
  }
};
const getAllProducts = (req, res) => {
  product.find().then((products) => {
    res.status(200).json(products);
  });
};
const createProduct = async (req, res) => {
  const { name, price,mediaUrl, description} = req.body;
  if(!name || !price || !description || !mediaUrl ){
    res.json(422).json({error:"some thing is missing"})
  }
  const saveProduct = await new product({
    price,
    mediaUrl,
    name,
    description,
  });
  saveProduct.save();
};

export default getAndSendProduct;
