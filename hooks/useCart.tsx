import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { product } from "@/utils/product";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
// import { toast } from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(10);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
  }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let upDateCart;

      if (prev) {
        upDateCart = [...prev, product];
      } else {
        upDateCart = [product];
      }
      localStorage.setItem("eShopCartItems", JSON.stringify(upDateCart));
      return upDateCart;
    });
    toast.success("Product added to cart");
  }, []);

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProducts);

        localStorage.setItem(
          "eShopCartItems",
          JSON.stringify(filteredProducts)
        );
      }
      toast.success("Product added to cart");
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
