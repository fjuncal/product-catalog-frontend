import { Product } from "../pages/ProductsPage";

interface ProductCardProps {
	product: Product;
	categoryName: string;
}

export default function ProductCard({
	product,
	categoryName,
}: ProductCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-xl p-6 transform transition duration-300 hover:scale-105">
			<h2 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h2>
			<p className="text-gray-600 mb-4">{product.description}</p>
			<div className="flex items-center justify-between">
				<span className="text-lg font-medium text-blue-600">
					${product.price.toFixed(2)}
				</span>
				<span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
					{categoryName}
				</span>
			</div>
		</div>
	);
}
