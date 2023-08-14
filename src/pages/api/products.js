// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import product from "../../../model/productScehma";
import mongoInit from "../../../helper/mongoinit";
mongoInit()

const getAllProducts = (req, res) => {
  const getAllProduct = product.find().then(products => {

    res.status(200).json(products)
  })
}

export default getAllProducts
