import "./css/Dashboard.css";
import "./css/DashboardCards.css";
import DashboardTextCards from "./DashboardTextCards";
import DashboardVisualCards from "./DashboardVisualCards";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <span className="dashboard-heading">Dashboard</span>
            <div className="dashboard-cards">
                <DashboardTextCards />
                <DashboardVisualCards />
            </div>
        </div>
    );
};
export default Dashboard;
