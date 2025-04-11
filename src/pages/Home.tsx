// src/pages/Home.tsx

import { Link } from "react-router";

export default function Home() {
	const token = localStorage.getItem("token");

	return (
		<div className="min-h-screen flex items-center justify-center relative ">
			<div className="relative z-10 text-center px-4">
				<h1 className="text-5xl md:text-6xl font-bold mb-4">
					Welcome to Product Catalog
				</h1>
				<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
					Explore our comprehensive catalog of top-quality products, discover
					new trends, and manage your favorites with ease.
				</p>
				<div className="flex justify-center gap-4">
					<Link
						to="/products"
						className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
					>
						View Products
					</Link>
					{!token && (
						<Link
							to="/login"
							className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
