import React, { useContext, useState } from "react";
import Card from "../../components/UI/Card";
import classes from "../TransferMoney/TransferMoney.module.css";
import useAPI from "../../hooks/useAPI";
import AuthContext from "../../context/AuthContext";

const TransferMoney = () => {
  const [toAccountNumber, setToAccountNumber] = useState();
  const [transferAmount, setTransferAmount] = useState();

  const { isLoading, error, newTransferData, handleNewTransfer } = useAPI();

  const {user}=useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleNewTransfer({
      toAccountNumber,
      transferAmount,
    });
  };

  return (
    <Card>
      <form className={classes.container} onSubmit={handleSubmit}>
        <h1>Transfer Page</h1>
        <label className={classes.balance}>
          Balance available: <span style={{ color: "green" }}>{user.account.balance}$</span>
        </label>
        <label>Transfer money to a bank account number:</label>
        <input
          placeholder="Bank account number"
          onChange={(e) => setToAccountNumber(e.target.value)}
        ></input>
        <label>Transfer amount:</label>
        <input
          placeholder="Transfer amount"
          onChange={(e) => {
            setTransferAmount(e.target.value);
          }}
        ></input>
        <button type="sumbit">Confirm Transfer</button>
        {isLoading && <p>isLoading</p>}
        {error && (
          <p>Error: {error || "Something Wrong please try again later"}</p>
        )}
      </form>
    </Card>
  );
};

export default TransferMoney;
