import product from "../../../../model/productScehma";

const Pid = async (req, res) => {
  const { pid } =await req.query;
  const getOne = await product.findOne({ _id: pid });
  res.status(200).json(getOne);
};

export default Pid;
