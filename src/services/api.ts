
const mockProducts = [
	{
		id: 1,
		name: "Wireless Headphones",
		description: "Noise-cancelling over-ear headphones",
		price: 89.99,
		categoryId: 1,
	},
	{
		id: 2,
		name: "Smartphone",
		description: "Latest model with OLED display",
		price: 699.99,
		categoryId: 1,
	},
	{
		id: 3,
		name: "Bluetooth Speaker",
		description: "Portable speaker with deep bass",
		price: 49.99,
		categoryId: 1,
	},
	{
		id: 4,
		name: "T-Shirt",
		description: "100% cotton crew neck t-shirt",
		price: 15.99,
		categoryId: 2,
	},
	{
		id: 5,
		name: "Jeans",
		description: "Slim fit denim jeans",
		price: 39.99,
		categoryId: 2,
	},
	{
		id: 6,
		name: "Novel: The Silent Forest",
		description: "Thriller book by a bestselling author",
		price: 12.5,
		categoryId: 3,
	},
	{
		id: 7,
		name: "Cookbook: Easy Recipes",
		description: "Quick meals for busy people",
		price: 18.0,
		categoryId: 3,
	},
	{
		id: 8,
		name: "Blender",
		description: "High-speed kitchen blender",
		price: 65.0,
		categoryId: 4,
	},
	{
		id: 9,
		name: "Vacuum Cleaner",
		description: "Cordless vacuum with HEPA filter",
		price: 129.99,
		categoryId: 4,
	},
	{
		id: 10,
		name: "Yoga Mat",
		description: "Non-slip mat for workouts",
		price: 22.0,
		categoryId: 5,
	},
];

const mockCategories = [
	{ id: 1, name: "Electronics" },
	{ id: 2, name: "Clothing" },
	{ id: 3, name: "Books" },
	{ id: 4, name: "Home & Kitchen" },
	{ id: 5, name: "Sports & Outdoors" },
];

interface User {
	id: number;
	username: string;
	token: string;
	password: string;
  }
  
  let mockUsers: User[] = JSON.parse(localStorage.getItem("mockUsers") || "[]");
  
  if (mockUsers.length === 0) {
	mockUsers = [{ id: 1, username: "user", token: "fake-jwt-token",password: "password" }];
	localStorage.setItem("mockUsers", JSON.stringify(mockUsers));
  }
  

interface LoginPayload {
	username: string;
	password: string;
}

interface RegisterPayload {
	username: string;
	password: string;
}
export const api = {
	login: ({ username, password }: LoginPayload) => {
		return new Promise((resolve, reject) => {
			const user = mockUsers.find((u) => u.username === username);			
			if (user && user.password === password) {
			  resolve({ token: user.token, username: user.username });
			} else {
			  reject({ message: "Invalid credentials" });
			}
		});
	},
	register: (userData: RegisterPayload) => {
		return new Promise((resolve, reject) => {
			const exists = mockUsers.find((u) => u.username === userData.username);
			if (exists) {
			  reject({ message: "User already exists" });
			} else {
			  const newUser = {
				...userData,
				id: mockUsers.length + 1,
				token: "fake-jwt-token",
			  };
			  mockUsers.push(newUser);
			  localStorage.setItem("mockUsers", JSON.stringify(mockUsers));
			  resolve(newUser);
			}
		  });
	},
	fetchProducts: () => {
		return new Promise((resolve) => {
			resolve(mockProducts);
		});
	},
	fetchCategories: () => {
		return new Promise((resolve) => {
			resolve(mockCategories);
		});
	},
};
