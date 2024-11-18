import React, { useEffect, useContext, useState } from "react";
import Card from "./UI/Card";
import classes from "./ProfileInfo.module.css";
import { formatDate } from "../utils/DateFormat";
import { AccountTransferHistory } from "../services/transfersService";
import AuthContext from "../context/AuthContext";
import TransfersHistory from "./TransfersHistory";

const ProfileInfo = ({ user }) => {
  const [transfers, setTransfers] = useState(null);
  const { token } = useContext(AuthContext);

  const FetchHistoryTransfers = async () => {
    const TransfersResponse = await AccountTransferHistory(token);
    console.log(TransfersResponse);
    setTransfers(TransfersResponse);
  };

  useEffect(() => {
    FetchHistoryTransfers();
  }, []);

  const userDetails = {
    name: user.name || user.account.name,
    bankAccount: user.account.account,
    balance: user.account.balance,
    email: user.email || user.newUser.email,
    joinDate: formatDate(user.date_created || user.newUser.date_created),
  };

  return (
    <Card className={classes.profile}>
      <h1>User Profile</h1>
      <div className={classes[`profile-details`]}>
        <p>
          <strong>Name:</strong> {userDetails.name}
        </p>
        <p>
          <strong>Current Balance:</strong> $
          {transfers?.currentBalance || userDetails.balance}
        </p>
        <p>
          <strong>Bank Account Number: </strong> {userDetails.bankAccount}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Join Date:</strong> {userDetails.joinDate}
        </p>
      </div>
      <div className={classes["transaction-history"]}>
        <h2>Transaction History</h2>
        <ul>
          <TransfersHistory
            accountNumber={userDetails.bankAccount}
            transfers={transfers?.accountTransfersHistory}
          />
        </ul>
      </div>
    </Card>
  );
};

export default ProfileInfo;
