import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { api } from "../services/api";
import useAuth from "../hooks/useAuth";

interface LoginFormData {
	username: string;
	password: string;
}

interface LoginResponse {
	token: string;
	username: string;
}

export default function Login() {
	const navigate = useNavigate();
	const auth = useAuth();
	const [formData, setFormData] = useState<LoginFormData>({
		username: "",
		password: "",
	});
	const [error, setError] = useState<string>("");

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		try {
			const response = (await api.login(formData)) as LoginResponse;
			auth.login(response.token);
			navigate("/products");
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message || "Login failed");
			} else {
				setError("An unknown error occurred");
			}
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded shadow-md w-80"
			>
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				{error && <div className="text-red-500 mb-2">{error}</div>}
				<div className="mb-4">
					<label className="block mb-1" htmlFor="username">
						Username
					</label>
					<input
						type="text"
						name="username"
						id="username"
						className="w-full border border-gray-300 p-2 rounded"
						value={formData.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block mb-1" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						className="w-full border border-gray-300 p-2 rounded"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-2 rounded"
				>
					Login
				</button>
				<p className="mt-2 text-center">
					Don't have an account?{" "}
					<Link to="/register" className="text-blue-500 underline">
						Register here
					</Link>
				</p>
			</form>
		</div>
	);
}
