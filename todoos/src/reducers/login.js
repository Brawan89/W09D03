const instialState = {
    token: "",
    role: "",
};

//reduce function 
const signIn = (state = instialState , action) => {
    const {type , payload} = action;

    switch(type) {
        case "LOGIN":
            const { token , role } = payload;
            localStorage.setItem("token" , token);
            localStorage.setItem("role" , role);

            return {  token , role };

        case "LOGOUT":
            localStorage.clear();
            return payload;
    
        default: 
        const tokenStorage = localStorage.getItem("token");
        const roleStorage = localStorage.getItem("role");
        if (tokenStorage && roleStorage) return {token: tokenStorage , role: roleStorage}
        else  return state;
    }
}

export default signIn;

export const log = (data) => {
    // console.log("From the reduce" , data);
    return {
        type: "LOGIN",
        payload: data
    };
};

export const logout = (data) => {
    return {
        type: "LOGOUT",
        payload: data, // { user: null , token: "" }
    };
};