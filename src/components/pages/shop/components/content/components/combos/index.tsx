import React, { useState, useContext } from "react";

// COMPONENTES
import ShopContext from "components/pages/shop/context";

// ESTILOS
import Styles from "./style.module.scss";

const Combos: React.FC = () => {
  // PROPS
  const { currentProduct } = useContext(ShopContext);

  // ESTADO
  const [activeCombo, setActiveCombo] = useState<number>(1);

  // CONTADOR
  const handleComboCounter = (add: number) => () =>
    setActiveCombo(
      activeCombo + add > 2 ? 0 : activeCombo + add < 0 ? 2 : activeCombo + add
    );

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <h1>{`How Many ${currentProduct?.name}?`}</h1>
        <p>Select one option</p>
        <div className={Styles.combosContainer}>
          <ul className={Styles.combos}>
            {currentProduct.combos.map((combo, indexCombo) => (
              <li
                key={combo.id}
                className={
                  activeCombo === indexCombo
                    ? Styles.activeCombo
                    : Styles.normalCombo
                }
              >{`${combo.name} | $${combo.price}`}</li>
            ))}
          </ul>
          <div className={Styles.combosActions}>
            <button onClick={handleComboCounter(-1)}>
              <span className={Styles.chevron}></span>
            </button>
            <button onClick={handleComboCounter(1)}>
              <span
                className={`${Styles.chevron} ${Styles.chevronBottom}`}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <img
        className={Styles.image}
        src={currentProduct.image}
        alt="Product Image"
      />
    </div>
  );
};

export default Combos;
