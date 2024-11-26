import "./css/Announcement.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const AnnouncementStripe = ({ stripe }) => {
    return (
        <div className="announcement-stripe">
            <div className="announcement-stripe-info-block">
                <div>{stripe.heading}</div>
                <div> {stripe.time}</div>
            </div>
            <div className="announcement-stripe-icons-block">
                <button>
                    <PushPinIcon />
                </button>
                <button>
                    <MoreHorizIcon />
                </button>
            </div>
        </div>
    );
};

const announcementStripes = [
    { heading: "Our schedule for every department", time: "5 Minutes ago" },
    { heading: "Meeting HR department", time: "Yesterday 12:30 PM" },
    {
        heading:
            "IT department need two more talents for UI/UX Designer position",
        time: "Yesterday 09:15 AM",
    },
];

const Announcement = () => {
    return (
        <div className="announcement">
            <div className="announcement-info-block-wrapper">
                <div className="announcement-info-block">
                    <div>Announcement</div>
                    <div>Today 13 sep 2021</div>
                </div>
                <div className="announcement-stripes">
                    {announcementStripes.map(stripe => {
                        return (
                            <AnnouncementStripe
                                stripe={stripe}
                                key={stripe.heading}
                            />
                        );
                    })}
                </div>
            </div>
            <button>See All Announcements</button>
        </div>
    );
};
export default Announcement;
