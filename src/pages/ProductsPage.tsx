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

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		api.fetchProducts().then((data: unknown) => setProducts(data as Product[]));
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Products</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
