"use client";
import Container from "@/app/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import { useParams } from "next/navigation";
import ListRating from "./ListRating";

const Product = () => {
  const params = useParams();
  console.log("params", params);
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
