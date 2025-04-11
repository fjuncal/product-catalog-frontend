import { Category } from "../pages/CategoriesPage";

interface CategoryCardProps {
	category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
	return (
		<div className="border rounded-lg shadow-md p-4 bg-white">
			<h2 className="text-xl font-bold">{category.name}</h2>
		</div>
	);
}
