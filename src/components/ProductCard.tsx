import { Product } from "../pages/ProductsPage";

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="border rounded-lg shadow-md p-4 bg-white">
			<h2 className="text-xl font-bold mb-2">{product.name}</h2>
			<p className="text-gray-600">{product.description}</p>
			<p className="mt-2 text-lg font-medium text-blue-600">${product.price}</p>
		</div>
	);
}
