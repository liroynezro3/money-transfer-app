import HTTP from "./http"

export const registerNewUser = (username, password) => {
    return HTTP.post("auth", "/", {username, password});
}

export const login = (username, password) => {
    return HTTP.post("auth", "/login", {username, password});
}