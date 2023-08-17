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
  const { name, price, description, mediaUrl } = req.body;
  console.log({mediaUrl})
  const saveProduct = new product({
    name,
    price,
    mediaUrl,
    description,
  });
  await saveProduct.save();
};

export default getAndSendProduct;
