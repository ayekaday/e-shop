"use client";
import Container from "@/app/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
import { useParams } from "next/navigation";

const Product = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
