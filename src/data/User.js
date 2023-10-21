export const User = {
    login: "",
    email: "",
    password: "",
    stuf: [],
}

export const UserCook = () => {
    return localStorage.getItem("user");
}
