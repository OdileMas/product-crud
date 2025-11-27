import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateProduct.css";

function CreateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // JWT token

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/products/products", // match backend route
        {
          name,
          price: Number(price), // convert to number
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` }, // send token
        }
      );

      if (res.data.success) {
        alert("Product created!");
        navigate("/products");
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.log(error.response || error.message); // see detailed error
      alert("Error creating product. Check console.");
    }
  };

  return (
    <div className="create-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
