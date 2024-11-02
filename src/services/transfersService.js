export const newTransfer = async (formData, token) => {
  try {
    console.log(token);
    console.log(formData);
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/transfers/newTransfer`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `bearer ${token}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    if (!responseJson.ok) {
      alert(`${responseJson?.message || responseJson}`);
      return responseJson;
    }
    alert("Transfer successful");
    console.log("Response data:", responseJson);
    return responseJson;
  } catch (err) {
    console.error("Caught error:", err);
  }
};

export const AccountTransferHistory = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/transfers/AccountHistoryTransfers`,
      {
        headers: {
          "Content-Type": "application/json",
          token: `bearer ${token}`,
        },
      }
    );
    const responseJson = await response.json();
    console.log(responseJson)
    if (!responseJson.ok) {
      return responseJson.message
    }
    return responseJson;
  } catch (err) {
    console.error("Caught error:", err);
  }
};
