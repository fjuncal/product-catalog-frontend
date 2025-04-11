import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
}

export interface Category {
	id: number;
	name: string;
}

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		api.fetchProducts().then((data: unknown) => setProducts(data as Product[]));
		api
			.fetchCategories()
			.then((data: unknown) => setCategories(data as Category[]));
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{products.map((product) => {
					// Find the category corresponding to the product's categoryId
					const category = categories.find(
						(cat) => cat.id === product.categoryId
					);
					return (
						<ProductCard
							key={product.id}
							product={product}
							categoryName={category ? category.name : "Unknown"}
						/>
					);
				})}
			</div>
		</div>
	);
}
