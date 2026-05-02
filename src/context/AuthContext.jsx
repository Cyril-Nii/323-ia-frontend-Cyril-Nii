import { createContext, useContext, useState, useEffect } from "react";
import { apiGetProfile, apiLogout } from "../services/api.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser]       = useState(null);   // { id, name, email, createdAt }
    const [loading, setLoading] = useState(true);   // true while checking session on mount

    // On mount — try to restore session from HTTP-only cookie
    useEffect(() => {
        apiGetProfile()
            .then((data) => setUser(data.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    const login = (userData) => setUser(userData);

    const logout = async () => {
        await apiLogout().catch(() => {});
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
};
