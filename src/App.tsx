import { Route, BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import AuthProvider from "./contexts/AuthProvider";

function App() {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route
							path="/products"
							element={
								<ProtectedRoute>
									<ProductsPage />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/categories"
							element={
								<ProtectedRoute>
									<CategoriesPage />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App;
