import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <GlobalContext.Provider value={{ user, login, logout }}>
            {children}
        </GlobalContext.Provider>
    );
}
