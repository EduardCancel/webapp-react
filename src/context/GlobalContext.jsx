import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [user, setUser] = useState(null);

    const [isloading, setIsLoading] = useState(true);

    function startLoading() {

        setIsLoading(true);
    }
    function stopLoading() {

        setIsLoading(false);
    }


    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <GlobalContext.Provider value={{ user, login, logout, isloading, startLoading, stopLoading }}>
            {children}
        </GlobalContext.Provider>
    );
}
