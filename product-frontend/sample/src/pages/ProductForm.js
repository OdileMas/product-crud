import { useState } from "react";
import axios from "axios";

function ProductForm({ fetchProducts, editProduct }) {
  const [name, setName] = useState(editProduct?.name || "");
  const [price, setPrice] = useState(editProduct?.price || "");
  const [description, setDescription] = useState(editProduct?.description || "");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProduct) {
        await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, { name, price, description }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post("http://localhost:5000/api/products", { name, price, description }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      fetchProducts();
      setName(""); setPrice(""); setDescription("");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">{editProduct ? "Update" : "Create"} Product</button>
    </form>
  );
}

export default ProductForm;
