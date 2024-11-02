import { createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    user:null,
    loginHandler: () => {},
    logoutHandler: () => {},
    updateCurrentBalance:()=>{}
})

export default AuthContext;