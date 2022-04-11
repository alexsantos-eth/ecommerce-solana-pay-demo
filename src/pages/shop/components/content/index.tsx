import backColors from "components/layout/utils";
import React, { useContext } from "react";

// COMPONENTES
import ShopContext from "../../context";
import ProductProp from "./components/productProp";
import Combos from "./components/combos";

// ESTILOS
import Styles from "./style.module.scss";

const ShopContent: React.FC = () => {
  // PROPS
  const { setFormData, step } = useContext(ShopContext);

  // CHANGE STEP
  const changeStep = (add: number) => () =>
    setFormData((prevFormData) => ({
      ...prevFormData,
      step: Math.max(0, Math.min(prevFormData.step + add, 5)),
    }));

  return (
    <div className={Styles.container}>
      <ul className={Styles.steps}>
        <li>
          <span
            style={{ color: step >= 0 ? backColors[step] : "var(--gray1)" }}
          >
            1
          </span>
        </li>
        <li>
          <span
            style={{ color: step >= 1 ? backColors[step] : "var(--gray1)" }}
          >
            2
          </span>
        </li>
        <li>
          <span
            style={{ color: step >= 2 ? backColors[step] : "var(--gray1)" }}
          >
            3
          </span>
        </li>
        <li>
          <span
            style={{ color: step >= 3 ? backColors[step] : "var(--gray1)" }}
          >
            4
          </span>
        </li>
        <li>
          <span
            style={{ color: step >= 4 ? backColors[step] : "var(--gray1)" }}
          >
            5
          </span>
        </li>
      </ul>

      {step === 0 && <Combos />}
      {step === 1 && <ProductProp type="sauces" info="Max flavors:" />}
      {step === 2 && <ProductProp type="dips" info="Up to" />}
      {step === 3 && <ProductProp type="extras" info="Optional" />}

      <div className={Styles.actions}>
        {step > 0 && (
          <button onClick={changeStep(-1)} className={Styles.backBtn}>
            Back
          </button>
        )}

        <button onClick={changeStep(1)}>Next</button>
      </div>
    </div>
  );
};

export default ShopContent;
