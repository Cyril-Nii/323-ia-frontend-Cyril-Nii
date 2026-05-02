
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const request = async (path, options = {}) => {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { "Content-Type": "application/json", ...options.headers },
        credentials: "include", // send HTTP-only cookies
        ...options,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw Object.assign(new Error(data.message || "Request failed"), {
            status: res.status,
            data,
        });
    }

    return data;
};


export const apiRegister = (name, email, password) =>
    request("/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
    });

export const apiLogin = (email, password) =>
    request("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

export const apiLogout = () => request("/logout", { method: "POST" });

export const apiGetProfile = () => request("/profile");

export const apiGetAllCrypto = () => request("/crypto");
export const apiGetGainers = () => request("/crypto/gainers");
export const apiGetNewListings = () => request("/crypto/new");

export const apiAddCrypto = (payload) =>
    request("/crypto", {
        method: "POST",
        body: JSON.stringify(payload),
    });
