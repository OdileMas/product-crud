import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
function Dashboard(){
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("user");
        navigate("/");
    };
    return(
        <div className="dashboard-container">
        <h2>Dashboard</h2>
        <button onClick={() =>navigate("/create")}>
            Create New Product
        </button>
        <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Dashboard;