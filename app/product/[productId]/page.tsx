"use client";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { useParams } from "next/navigation";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

const Product = () => {
  const params = useParams();
  console.log("params", params);

  // Null checking
  if (!params || !params.productId) {
    return <div>Product not found</div>;
  }
  const product = products.find((item) => item.id === params.productId);

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="flex flex-col mt-20 gap-4">
          <div>Add Rating</div>
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
};

export default Product;
