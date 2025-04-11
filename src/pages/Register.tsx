// src/pages/Register.tsx
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { api } from "../services/api";

interface RegisterFormData {
	username: string;
	password: string;
}

export default function Register() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState<RegisterFormData>({
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
			await api.register(formData);
			navigate("/login");
		} catch (err: unknown) {
			if (err instanceof Error) {
				setError(err.message || "Registration failed");
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
				<h2 className="text-2xl font-bold mb-4">Register</h2>
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
					className="w-full bg-green-500 text-white p-2 rounded"
				>
					Register
				</button>
			</form>
		</div>
	);
}
