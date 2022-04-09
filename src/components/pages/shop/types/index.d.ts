interface ShopContext {
  currentProduct: Product;
  dotColor: string;
  color: string;
  step: number;
}

interface Product {
  combos: ProductCombo[];
  extras: string[]; // IDS DE EXTRAS
  sauces: string[]; // IDS DE SAUCES
  dips: string[]; // IDS DE DIPS
  image: string;
  name: string;
  id: string;
}

interface ProductCombo {
  price: number;
  name: string;
  id: string;
}

interface ProductSauce {
  description: string;
  info: string;
  name: string;
  id: string;
}

interface ProductDip {
  description: string;
  name: string;
  id: string;
}

interface ProductExtra {
  description: string;
  price: number;
  name: string;
  id: string;
}
