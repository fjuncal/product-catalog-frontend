import { useEffect, useState } from "react";
import { api } from "../services/api";
import CategoryCard from "../components/CategoryCard";

export interface Category {
	id: number;
	name: string;
}

export default function CategoriesPage() {
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		api.fetchCategories().then((data) => setCategories(data as Category[]));
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-4">Categories</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{categories.map((category) => (
					<CategoryCard key={category.id} category={category} />
				))}
			</div>
		</div>
	);
}
