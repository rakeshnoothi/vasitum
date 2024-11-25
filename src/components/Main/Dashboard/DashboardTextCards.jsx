const DashboardTextCard = ({ dashboradCardHeading, count, moreInfo }) => {
    return (
        <div className="dashboard-text-card">
            <div>{dashboradCardHeading}</div>
            <div>{count}</div>
            <div>{moreInfo}</div>
        </div>
    );
};

const DashboardTextCards = () => {
    return (
        <div className="dashboard-text-cards">
            <DashboardTextCard />
        </div>
    );
};
export default DashboardTextCards;
