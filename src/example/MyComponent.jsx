import { useEffect } from "react";
import useApi from "./useApi"
import {registerNewUser} from "./auth.service"

const MyComponent = () => {
    const {
        dispatch,
        data,
        isLoading,
        success,
        error
    } = useApi();

        useEffect(() => {
            dispatch(() => registerNewUser({username: "liroy", password: "123123"}))
        }, []);

        console.log("---data", data)
        console.log("---isLoading", isLoading)
        console.log("---success", success)
        console.log("---error", error)

    return <div>Hello!!</div>
}

export default MyComponent;