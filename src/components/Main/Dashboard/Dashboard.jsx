import Announcement from "./Announcement";
import "./css/Dashboard.css";
import "./css/DashboardCards.css";
import DashboardTextCards from "./DashboardTextCards";
import DashboardVisualCards from "./DashboardVisualCards";
import RecentActivity from "./RecentActivity";
import Schedule from "./Schedule";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-wrapper-one">
                <div className="dashboard-cards">
                    <DashboardTextCards />
                    <DashboardVisualCards />
                </div>
                <Announcement />
            </div>
            <div
                className="dashboard-wrapper-two"
                style={{ display: "flex", gap: "20px" }}
            >
                <RecentActivity />
                <Schedule />
            </div>
        </div>
    );
};
export default Dashboard;
