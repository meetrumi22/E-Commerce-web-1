/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { domain } from "../../helper/domain";

const create = () => {
  const createProduct = async () => {
    const res = await fetch(`${domain}/api/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        description,
        mediaUrl,
      }),
    });

    console.log({ res });
  };

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [mediaUrl, setMediaurl] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    createProduct();
  };

  return (
    <form
      className=" bg-red-200 p-4 w-[60rem] h-[30rem] mx-auto"
      onSubmit={submitHandler}
    >
      <div className="p-4 flex flex-col justify-center items-center gap-6 h-full">
        <h1 className="text-3xl font-bold text-white mb-12">Add Product:</h1>
        <input
          type="text"
          placeholder="enter name"
          className=" w-96 p-2 outline-none"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="enter price"
          className=" w-96 p-2 outline-none"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          placeholder="enter description"
          className=" w-96 p-2 outline-none"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="text"
          placeholder="enter mediaUrl"
          className=" w-96 p-2 outline-none"
          onChange={(e) => setMediaurl(e.target.value)}
          value={mediaUrl}
        />
        <Button variant="destructive">Submit</Button>
      </div>
    </form>
  );
};

export default create;
