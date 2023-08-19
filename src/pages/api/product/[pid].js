import product from "../../../../model/productScehma";

const Pid = async (req, res) => {
  switch (req.method) {
    case "GET":
      await findOneProduct(req, res);
      break;
    case "DELETE":
      await deleteOneProduct(req, res);
      break;
  }
};

const deleteOneProduct = async (req, res) => {
  const { pid } = req.query;
  const deleteOne = await product.findOneAndDelete({ _id: pid });
  res.status(200).json({ message: "Product SuccesFully Deleted" });
};

const findOneProduct = async (req, res) => {
  const { pid } = await req.query;
  const getOne = await product.findOne({ _id: pid });
  res.status(200).json(getOne);
};

export default Pid;
