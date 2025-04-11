import { Route, BrowserRouter, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					{/* <Route path="/register" element={<Register />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/categories" element={<CategoriesPage />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
