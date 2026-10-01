"use client";
import { createContext, useState } from "react";

export const MyContext = createContext(null)

export const MyP = ({ children }) => {
    const [num, setN] = useState(0)

    const inc = () => {
        setN(prev => prev + 1)
    }

    const dec = () => {
        setN(prev => prev - 1)
    }

    return <MyContext.Provider value={{ num, inc, dec }}>
        {children}
    </MyContext.Provider>
}