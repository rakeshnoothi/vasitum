import "./css/Schedule.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ScheduleStripe = ({ stripe }) => {
    return (
        <div className="schedule-stripe">
            <div className="schedule-stripe-info-block">
                <div>{stripe.heading}</div>
                <div> {stripe.time}</div>
            </div>
            <div className="schedule-stripe-icons-block">
                <button>
                    <MoreHorizIcon />
                </button>
            </div>
        </div>
    );
};

const scheduleStripes = [
    { heading: "Review candidate applications", time: "5 Minutes ago" },
    {
        heading: "Short meeting with product designer from IT department",
        time: "Yesterday 12:30 PM",
    },
    {
        heading: "Interview with candidates",
        time: "Yesterday 09:15 AM",
    },
];

const Schedule = () => {
    return (
        <div className="schedule">
            <div className="schedule-info-block-wrapper">
                <div className="schedule-info-block">
                    <div>Upcoming schedule</div>
                    <div>Today 13 sep 2021</div>
                </div>
                <div className="schedule-stripes">
                    {scheduleStripes.map(stripe => {
                        return (
                            <ScheduleStripe
                                stripe={stripe}
                                key={stripe.heading}
                            />
                        );
                    })}
                </div>
            </div>
            <button>Create New Schedule</button>
        </div>
    );
};
export default Schedule;
