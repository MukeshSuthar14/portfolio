'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const LoaderContext = createContext();

export function LoaderProvider({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <LoaderContext.Provider value={{ loading }}>
            {children}
        </LoaderContext.Provider>
    );
}

export function useLoader() {
    return useContext(LoaderContext);
}