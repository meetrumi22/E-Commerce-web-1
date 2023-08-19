import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const Home = ({ products }) => {
  const productData = products.map((product) => {
    return (
      <Card key={product._id} className="w-96 bg-red-200 mx-auto">
        <CardHeader>
          {console.log(product.name,product.mediaUrl)}
          <img src={product.mediaUrl} alt="image" />
        </CardHeader>
        <CardContent>
          <CardTitle>Name: {product.name}</CardTitle>
        </CardContent>
        <CardFooter>
          <Button variant={"destructive"}>
            <Link href={"/product/[id]"} as={`/product/${product._id}`}>
              Price: {product.price}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  });
  return (
    <>
      <h1 className="text-red-400 text-3xl font-bold bg-red-200 text-center mb-4">
        Products :
      </h1>
      <div className="flex flex-wrap">{productData}</div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { products: data },
  };
}

export default Home;
