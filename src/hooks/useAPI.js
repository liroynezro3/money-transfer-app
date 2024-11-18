import { useState, useContext } from "react";
import { loginUser, registerUser } from "../services/authService";
import { newTransfer } from "../services/transfersService";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useAPI = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const [registerData, setRegisterData] = useState(null);
  const [newTransferData, setNewTransferData] = useState(null);

  const { loginHandler, token, updateCurrentBalance } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (fromData) => {
    try {
      setError(false);
      setIsLoading(true);
      const data = await loginUser(fromData);
      setLoginData(data);
      if (data?.responeUserDetails?.token) {
        loginHandler(data.responeUserDetails);
        navigate("/profile");
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const handleRegister = async (fromData) => {
    try {
      setError(false);
      setIsLoading(true);
      const data = await registerUser(fromData);
      setRegisterData(data);
      if (data?.responeUserDetails?.token) {
        loginHandler(data.responeUserDetails);
        navigate("/profile");
      }
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const handleNewTransfer = async (fromData) => {
    console.log(token);
    try {
      setError(false);
      setIsLoading(true);
      const data = await newTransfer(fromData, token);
      if (!data.ok) {
        setError(data.message);
        setIsLoading(false);
        return;
      }
      console.log(data);
      setNewTransferData(data);
      updateCurrentBalance(data.newTransferHistory.transferAmount);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  return {
    error,
    isLoading,
    loginData,
    registerData,
    newTransferData,
    handleLogin,
    handleRegister,
    handleNewTransfer,
  };
};
export default useAPI;
