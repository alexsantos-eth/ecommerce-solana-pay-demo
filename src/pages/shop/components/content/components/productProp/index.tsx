import React, { useContext, useState } from "react";

// ESTILOS
import Styles from "./style.module.scss";

// CONTEXT
import ShopContext from "pages/shop/context";
import SectionTitle from "../sectionTitle";
import ProductSlider from "../slider";
import useLoadList from "./hooks";

interface ProductPropProps {
  type: "sauces" | "extras" | "dips";
  info: string;
}
const ProductProp: React.FC<ProductPropProps> = ({ type, info }) => {
  // PROPS
  const { currentProduct } = useContext(ShopContext);

  // SELECCIONADOS
  const [selectedProp, setSelectedProp] = useState<Record<string, number>>({});

  // PROPS SELECCIONADOS
  const selectedCount = Object.values(selectedProp).reduce((a, b) => a + b, 0);

  // ESTADO
  const [list, setList] = useState<
    Record<string, ProductSauce | ProductDip | ProductExtra>
  >({});

  // HOOKS
  useLoadList(type, setList);

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <SectionTitle title={`Choose your ${currentProduct?.name} ${type}`} />
        <p>
          {`${info} ${currentProduct.maxsauces}`}
          <span className={Styles.dotList}>
            {Array(currentProduct[`max${type}`])
              .fill(0)
              .map((_, i) => (
                <span
                  key={i}
                  className={Styles.dot}
                  style={{
                    background:
                      i < selectedCount ? "var(--yellow1)" : "#E5E5E5",
                  }}
                />
              ))}
          </span>
        </p>
        <ul className={Styles.descriptions}>
          {Object.keys(selectedProp).map((key, index) =>
            selectedProp[key] > 0 ? (
              <li
                key={`list_${index}`}
                // @ts-ignore
              >{`${selectedProp[key]} | ${list[key]?.name}`}</li>
            ) : null
          )}
        </ul>
      </div>
      <ProductSlider
        setSelectedProp={setSelectedProp}
        selectedProp={selectedProp}
        list={list}
        type={type}
      />
    </div>
  );
};

export default ProductProp;
