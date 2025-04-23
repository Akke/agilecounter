import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const cache = localStorage.getItem("jwt");
        if(cache) {
            setUser(cache);
        }
    }, []);

    useEffect(() => {
        if(user) {
            localStorage.setItem("jwt", user);
        } else {
            localStorage.removeItem("jwt");
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;