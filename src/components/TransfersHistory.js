import React from "react";
import { formatDate } from "../utils/DateFormat";
import classes from "./TransfersHistory.module.css";
const TransfersHistory = ({ transfers,accountNumber }) => {
  console.log(accountNumber);

  const historyList = transfers
    ?.slice(-9)
    .reverse()
    .map((item) => (
      <li
        className={
          item.toAccountNumber == accountNumber
            ? classes["transfer-li-green"]
            : classes["transfer-li-red"]
        }
        key={item._id}
      >
        <span className={classes["transfer-span"]}>
          <strong>Date:</strong>
          {formatDate(item.date)}
        </span>
        <span className={classes["transfer-span"]}>
          <strong>To account:</strong> {item.toAccountNumber}
        </span>
        <span className={classes["transfer-span"]}>
          <strong>Transfer amount:</strong> {item.transferAmount}$
        </span>
      </li>
    ));

  return <>{historyList ? historyList : <li>No transfers found</li>}</>;
};

export default TransfersHistory;
