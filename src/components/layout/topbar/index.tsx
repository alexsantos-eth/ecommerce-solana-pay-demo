import React from "react";

// ASSETS
import Logo from "assets/logo_white.png";

// ESTILOS
import Styles from "./style.module.scss";

const Topbar = () => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.content}>
        <div className={Styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#promos">Promos</a>
          </li>
          <li>
            <a href="#rewars">Rewards</a>
          </li>
          <li>
            <a href="#orderHistory">Order History</a>
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
