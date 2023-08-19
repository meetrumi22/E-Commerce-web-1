import { domain } from "../../../helper/domain";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Id = ({ product }) => {
  const router = useRouter();

  const deleteProduct = async () => {
    await fetch(`${domain}/api/product/${product._id}`, {
      method: "DELETE",
    });
    router.push("/");
  };
  return (
    <>
      <Card className="w-96 bg-red-200 mx-auto">
        <CardHeader>
          <img src={product.mediaUrl} alt="image" />
        </CardHeader>
        <CardContent>
          <CardTitle>Name: {product.name}</CardTitle>
          <CardDescription>Description: {product.description}</CardDescription>
        </CardContent>
        <CardFooter className="gap-28">
          <Button variant={"destructive"}>
            <Link href={"/product/[id]"} as={`/product/${product._id}`}>
              Price: {product.price}
            </Link>
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => {
              deleteProduct()
            }}
          >
            Delete: {product.name}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export async function getStaticProps({ params: { id } }) {
  const getOne = await fetch(`${domain}/api/product/${id}`);
  const data = await getOne.json();
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  const getAll = await fetch(`${domain}/api/products`);
  const data = await getAll.json();

  const paths = data.map((ids) => ({
    params: { id: ids._id },
  }));
  return { paths, fallback: false };
}
export default Id;
