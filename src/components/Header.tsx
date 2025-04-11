import { Link, useNavigate } from "react-router";

export default function Header() {
	const navigate = useNavigate();
	const token = localStorage.getItem("token");

	function handleLogout() {
		localStorage.removeItem("token");
		navigate("/login");
	}

	return (
		<header className="bg-blue-600 text-white shadow-md">
			<div className="container mx-auto px-4 py-3 flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Link to="/" className="text-xl font-bold">
						Product Catalog
					</Link>
					<nav className="hidden md:flex items-center gap-4">
						<Link to="/" className="hover:underline">
							Home
						</Link>
						<Link to="/products" className="hover:underline">
							Products
						</Link>
						<Link to="/categories" className="hover:underline">
							Categories
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					{token ? (
						<button
							onClick={handleLogout}
							className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
						>
							Logout
						</button>
					) : (
						<Link to="/login" className="hover:underline">
							Login
						</Link>
					)}
				</div>
			</div>
			{!token && (
				<div className="bg-blue-500 text-sm text-center py-1">
					Test credentials: <span className="font-bold">username:</span> user,{" "}
					<span className="font-bold">password:</span> password
				</div>
			)}
		</header>
	);
}
