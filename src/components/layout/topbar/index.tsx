import React, { useContext } from "react";

// ASSETS
import LogoWhite from "assets/logo_white.png";
import LogoBlack from "assets/logo_dark.png";

// CONTEXT
import ShopContext from "pages/shop/context";

// ESTILOS
import Styles from "./style.module.scss";
import { fontColors } from "../utils";

const Topbar = () => {
  const { step } = useContext(ShopContext);

  return (
    <nav className={Styles.nav}>
      <div className={Styles.content}>
        <div className={Styles.logo}>
          <img
            src={fontColors[step] === "var(--white1)" ? LogoBlack : LogoWhite}
            alt="Logo"
          />
        </div>
        <ul>
          <li>
            <a
              style={{ color: step === 3 ? "var(--white1)" : "var(--black1)" }}
              href="#menu"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              style={{ color: step === 3 ? "var(--white1)" : "var(--black1)" }}
              href="#promos"
            >
              Promos
            </a>
          </li>
          <li>
            <a
              style={{ color: step === 3 ? "var(--white1)" : "var(--black1)" }}
              href="#rewars"
            >
              Rewards
            </a>
          </li>
          <li>
            <a
              style={{ color: step === 3 ? "var(--white1)" : "var(--black1)" }}
              href="#orderHistory"
            >
              Order History
            </a>
          </li>
          <li className={Styles.connectWallet}>
            <button>Connect Wallet</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
