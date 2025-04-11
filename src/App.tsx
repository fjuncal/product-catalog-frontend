import { Route, BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					{/* <Route path="/register" element={<Register />} /> */}
					{/* <Route
						path="/products"
						element={
							<ProtectedRoute>
								<ProductsPage />
							</ProtectedRoute>
						}
					/> */}
					{/* <Route
						path="/categories"
						element={
							<ProtectedRoute>
								<CategoriesPage />
							</ProtectedRoute>
						}
					/> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
