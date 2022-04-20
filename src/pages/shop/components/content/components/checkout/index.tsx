import React, { useContext, useRef } from "react";

import CheckOutBanner from "assets/checkout.png";

import Sauces from "../../../../../../test/sauces.json";
import Extras from "../../../../../../test/extras.json";
import Dips from "../../../../../../test/dips.json";

import SectionTitle from "../sectionTitle";
import ShopContext from "pages/shop/context";

import Styles from "./style.module.scss";
import useTotalPrice from "./hooks";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Transaction } from "@solana/web3.js";
import { shopAddress, usdcAddress } from "utils";
import {
  createTransferInstruction,
  getOrCreateAssociatedTokenAccount,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import toast from "react-hot-toast";

export interface CheckoutProps {
  selectedProp: Record<string, Record<string, number>>;
  activeCombo: number;
}

const Checkout: React.FC<CheckoutProps> = ({ selectedProp, activeCombo }) => {
  // CONNECTION
  const { connection } = useConnection();

  // TRANS
  const { publicKey, signTransaction, sendTransaction } = useWallet();

  // PROPS
  const { currentProduct, setFormData } = useContext(ShopContext);

  // TOTAL
  let totalPrice = useTotalPrice(activeCombo, selectedProp);

  // NEXT
  const nextPage = () => setFormData((prevData) => ({ ...prevData, step: 5 }));

  // TRANSFER
  const makeTransfer = async () => {
    const toastId = toast.loading("Processing transaction...");
    if (publicKey && signTransaction) {
      const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        { publicKey },
        usdcAddress,
        publicKey
      );

      const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        publicKey,
        usdcAddress,
        shopAddress
      );

      const transaction = new Transaction().add(
        createTransferInstruction(
          fromTokenAccount.address,
          toTokenAccount.address,
          fromTokenAccount.address,
          totalPrice,
          [],
          TOKEN_PROGRAM_ID
        )
      );

      const signature = await sendTransaction(transaction, connection);
      const response = await connection.confirmTransaction(
        signature,
        "processed"
      );
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <SectionTitle title={`Is your order correct?`} />
      </div>
      <div className={Styles.info}>
        <img src={CheckOutBanner} alt="Banner" />
        <div className={Styles.checkContainer}>
          <div className={Styles.checkContent}>
            <p className={Styles.checkTitle}>
              {currentProduct.combos[activeCombo]?.name}
            </p>
            <ul>
              {Object.entries(selectedProp.sauces ?? {}).map(([key, count]) => {
                if (count > 0)
                  return (
                    <li key={key}>
                      {/* 
                    // @ts-ignore */}
                      {count} x {Sauces[key]?.name}
                    </li>
                  );
                else return <></>;
              })}
              {Object.entries(selectedProp.dips ?? {}).map(([key, count]) => {
                if (count > 0)
                  return (
                    <li key={key}>
                      {/* 
                    // @ts-ignore */}
                      {count} x {Dips[key]?.name}
                    </li>
                  );
                else return <></>;
              })}
              {Object.entries(selectedProp.extras ?? {}).map(([key, count]) => {
                if (count > 0)
                  return (
                    <li key={key}>
                      {/* 
                    // @ts-ignore */}
                      {count} x {Extras[key]?.name}
                    </li>
                  );
                else return <></>;
              })}
            </ul>
            <p className={Styles.total}>
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </p>
          </div>

          <div className={Styles.checkActions}>
            <button onClick={makeTransfer} className={Styles.pay}>
              Transfer
            </button>
            <button onClick={nextPage} className={Styles.pay}>
              Solana Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
