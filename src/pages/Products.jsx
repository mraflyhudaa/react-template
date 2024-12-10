import { useEffect, useState } from "react";
import { useProducts } from "@features/products/api/productApi";

// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     description: "High-quality wireless headphones with noise cancellation",
//     price: 199.99,
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     description: "Latest model with advanced camera system",
//     price: 899.99,
//   },
//   {
//     id: 3,
//     name: "Laptop",
//     description: "Powerful laptop for work and gaming",
//     price: 1299.99,
//   },
//   {
//     id: 4,
//     name: "Smartwatch",
//     description: "Fitness tracking and notifications on your wrist",
//     price: 249.99,
//   },
//   {
//     id: 5,
//     name: "Wireless Earbuds",
//     description: "Compact earbuds with great sound quality",
//     price: 149.99,
//   },
// ];

export const Products = () => {
  //fetch products from an API
  const { getProducts, loading, error } = useProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, [getProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
