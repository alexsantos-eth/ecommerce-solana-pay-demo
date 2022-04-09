import { createContext } from "react";
import Products from "test/products.json";

export const defFormData: ShopContext = {
  step: 0,
  color: "var(--yellow1)",
  dotColor: "var(--white1)",
  currentProduct: Products.boneless_wings,
};

const ShopContext = createContext<ShopContext>(defFormData);
export default ShopContext;
