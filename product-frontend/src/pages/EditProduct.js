import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateProduct.css"; // reuse same CSS

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // JWT token

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`, // fetch by ID
          { headers: { Authorization: `Bearer ${token}` } } // send token
        );

        if (res.data.success) {
          const product = res.data.product; // correct response field
          setName(product.name);
          setPrice(product.price);
          setDescription(product.description);
        } else {
          alert("Product not found");
          navigate("/products");
        }
      } catch (error) {
        console.log("Error fetching product:", error.response || error.message);
        alert("Error fetching product");
        navigate("/products");
      }
    };

    fetchProduct();
  }, [id, navigate, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/products/${id}`, // match backend
        { name, price, description },
        { headers: { Authorization: `Bearer ${token}` } } // token required
      );

      if (res.data.success) {
        alert("Product updated successfully!");
        navigate("/products");
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.log("Error updating product:", error.response || error.message);
      alert("Error updating product");
    }
  };

  return (
    <div className="create-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
