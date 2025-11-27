import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      <div className="dashboard-content">
        <div className="card" onClick={() => navigate("/create")}>
          <h3>Create New Product</h3>
          <p>Click here to add a new product to your inventory.</p>
          <button className="card-btn">Create</button>
        </div>

        <div className="card" onClick={() => navigate("/products")}>
          <h3>Product List</h3>
          <p>View, edit, or delete existing products.</p>
          <button className="card-btn">View Products</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
