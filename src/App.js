import { memo, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/Sidebar";
import AuthContext from "./context/AuthContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import TransferMoney from "./pages/TransferMoney/TransferMoney";

function App() {
  const { isLoggedIn,user } = useContext(AuthContext);
console.log("render")
  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.container} style={{ display: "flex" }}>
        <SideBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login />} />
          {isLoggedIn && (
            <>
              <Route path="/Profile" element={<Profile user={user}/>} />
              <Route path="/TransferMoney" element={<TransferMoney user={user}/>} />
            </>
          )}
          <Route path="*" element={<h2>Wrong Route</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default memo(App);
