/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
"use client"
import { useState, useEffect, useCallback } from "react";
export const useToken = (initialToken?: string | null): [string | null, (newToken?: string | null | undefined) => void] => {
    const [token, setToken] = useState<string | null>(initialToken === undefined ? null : initialToken);
    console.log("init");
    useEffect(() => {
        console.log("update", localStorage.getItem("token"));
        window.addEventListener('storage', () => setToken(localStorage.getItem("token")));
        setToken(localStorage.getItem("token"));
    }, []);

    const useToken = useCallback((newToken?: string | null | undefined) => {
        if (newToken === null || newToken === undefined) {
            localStorage.removeItem("token");
            setToken("");
        } else {
            localStorage.setItem("token", newToken);
            setToken(newToken);
        }
    }, []);

    return [token, useToken];
}