import { useState, ReactNode } from "react";
import { AuthContext, AuthContextProps } from "./AuthContext";

interface AuthProviderProps {
	children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
	const [token, setToken] = useState<string | null>(() =>
		localStorage.getItem("token")
	);

	function login(newToken: string) {
		localStorage.setItem("token", newToken);
		setToken(newToken);
	}

	function logout() {
		localStorage.removeItem("token");
		setToken(null);
	}

	const value: AuthContextProps = {
		token,
		login,
		logout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
