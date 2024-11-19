export const registerUser = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const responseJson = await response.json();
    console.log(responseJson);
    if (!responseJson.ok) {
      alert(`Error message: ${responseJson?.message}`);
      throw new Error(responseJson?.message);
    }
    alert("Register successful");
    console.log("Response data:", responseJson.responeUserDetails);
    return responseJson;
  } catch (err) {
    console.error("Caught error:", err);
    return err;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const responseJson = await response.json();
    if (!responseJson.ok) {
      alert(`Error message: ${responseJson?.message}`);
      throw new Error(responseJson?.message);
    }
    alert("Login successful");
    console.log("Response data:", responseJson?.responeUserDetails);
    console.log(responseJson);
    return responseJson;
  } catch (err) {
    console.error("Caught error:", err);
    return err;
  }
};

export const checkValidUser = async (token) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/users/userValid`,
      {
        headers: {
          token: `bearer ${token}`,
        },
      }
    );
    const responseJson = await response.json();
    if (!responseJson.ok) {
      return false;
    }
    return responseJson;
  } catch (err) {
    console.error("Caught error:", err);
    return err;
  }
};
