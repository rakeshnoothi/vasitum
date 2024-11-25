const DashboardVisualCard = ({ card }) => {
    return (
        <div className="dashboard-visual-card">
            <div className="info-block">
                <div>{card.heading}</div>
                <div>{card.count}</div>
                <div className="more-info">
                    <div>{card.moreInfo[0]}</div>
                    <div>{card.moreInfo[2]}</div>
                </div>
            </div>
            <div className="image-block">zz</div>
        </div>
    );
};

const dashboardVisualCards = [
    {
        heading: "Available Positions",
        count: 216,
        moreInfo: ["140 men", "90 women"],
    },
    {
        heading: "Job Openings",
        count: 16,
        moreInfo: ["6 men", "10 women"],
    },
];

const DashboardVisualCards = () => {
    return (
        <div className="dashboard-visual-cards">
            {dashboardVisualCards.map(card => {
                return <DashboardVisualCard card={card} key={card.heading} />;
            })}
        </div>
    );
};
export default DashboardVisualCards;
