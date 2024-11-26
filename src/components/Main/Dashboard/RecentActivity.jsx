import "./css/RecentActivity.css";

const RecentActivity = () => {
    return (
        <div className="recent-activity">
            <div className="recent-activity-heading">Recent Activity</div>
            <div className="recent-activity-content-wrapper">
                <div className="recent-activity-info-block">
                    <div>10.40 AM, Fri 10 Sept 2021</div>
                    <div>You Posted a New Job</div>
                    <div>
                        Kindly check the requirements and terms of work and make
                        sure everything is right.
                    </div>
                </div>
                <div className="recent-activity-button-block">
                    <div>Today you make 12 Activity</div>
                    <button>See all activity</button>
                </div>
            </div>
        </div>
    );
};
export default RecentActivity;
