import { fontColors } from "components/layout/utils";
import ShopContext from "pages/shop/context";
import React, { useContext } from "react";

// ESTILOS
import Styles from "./style.module.scss";

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  // PROPS
  const { step } = useContext(ShopContext);

  return (
    <h1 style={{ color: fontColors[step] }} className={Styles.title}>
      {title}
    </h1>
  );
};

export default SectionTitle;
