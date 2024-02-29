'use client'
import React, { createContext, useState, useContext } from 'react';
import { use } from 'react';

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme];

    return (
        <GlobalContext.Provider value={globalState}>
            <GlobalUpdateContext.Provider value={{
                theme,
            }}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);