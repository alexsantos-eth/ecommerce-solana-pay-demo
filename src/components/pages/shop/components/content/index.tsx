import React, { useContext } from "react";

// COMPONENTES
import ShopContext from "../../context";
import Combos from "./components/combos";

// ESTILOS
import Styles from "./style.module.scss";

const ShopContent: React.FC = () => {
  // PROPS
  const { step, color } = useContext(ShopContext);

  return (
    <div className={Styles.container}>
      <ul className={Styles.steps}>
        <li>
          <span style={{ color: step === 0 ? color : "var(--gray1)" }}>1</span>
        </li>
        <li>
          <span style={{ color: step === 1 ? color : "var(--gray1)" }}>2</span>
        </li>
        <li>
          <span style={{ color: step === 2 ? color : "var(--gray1)" }}>3</span>
        </li>
        <li>
          <span style={{ color: step === 3 ? color : "var(--gray1)" }}>4</span>
        </li>
        <li>
          <span style={{ color: step === 4 ? color : "var(--gray1)" }}>5</span>
        </li>
      </ul>

      {step === 0 && <Combos />}

      <div className={Styles.actions}>
        <button>Next</button>
        {step > 0 && <button className={Styles.backBtn}>Back</button>}
      </div>
    </div>
  );
};

export default ShopContent;
