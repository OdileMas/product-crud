import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // JWT token

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Backend returns { success: true, products: [...] }
      if (res.data.success) {
        setProducts(res.data.products);
      } else {
        setProducts([]);
        console.log("No products found");
      }
    } catch (error) {
      console.log("Error fetching products:", error.response || error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Remove deleted product from state
      setProducts(products.filter((p) => p._id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      console.log("Delete failed:", error.response || error.message);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found. Create some!</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              <div className="product-buttons">
                <button onClick={() => navigate(`/edit/${product._id}`)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button className="create-btn" onClick={() => navigate("/create")}>
        Create New Product
      </button>
    </div>
  );
}

export default ProductList;
