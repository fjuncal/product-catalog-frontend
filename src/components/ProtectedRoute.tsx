import { JSX } from "react";
import { Navigate, useLocation } from "react-router";

interface ProtectedRouteProps {
	children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const token = localStorage.getItem("token");
	const location = useLocation();

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}
