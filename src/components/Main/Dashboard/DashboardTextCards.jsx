const DashboardTextCard = ({ card }) => {
    return (
        <div
            className="dashboard-text-card"
            style={{ backgroundColor: `${card.backgroundColor}` }}
        >
            <div>{card.heading}</div>
            <div>{card.count}</div>
            <div>{card.moreInfo}</div>
        </div>
    );
};

const dashboardTextCards = [
    {
        heading: "Available Positions",
        count: 24,
        moreInfo: "4 urgentely required",
        backgroundColor: "#FFEFE7",
    },
    {
        heading: "Job Openings",
        count: 10,
        moreInfo: "4 active hiring",
        backgroundColor: "#E8F0FB",
    },
    {
        heading: "New Employees",
        count: 24,
        moreInfo: "4 department",
        backgroundColor: "#FDEBF9",
    },
];

const DashboardTextCards = () => {
    return (
        <div className="dashboard-text-cards">
            {dashboardTextCards.map(card => {
                return <DashboardTextCard card={card} key={card.heading} />;
            })}
        </div>
    );
};
export default DashboardTextCards;
