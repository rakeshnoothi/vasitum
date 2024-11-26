import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import useSidebarContext from "../../hooks/useSidebarContext";
import CloseIcon from "@mui/icons-material/Close";

const asideMainMenuButtons = [
    { name: "Dashboard", button: <DashboardIcon /> },
    { name: "Recruitment", button: <PersonAddAlt1Icon /> },
    { name: "Schedule", button: <CalendarTodayIcon /> },
    { name: "Employee", button: <GroupsIcon /> },
    { name: "Department", button: <GroupWorkIcon /> },
];

const asideOtherButtons = [
    { name: "Support", button: <HeadsetIcon /> },
    { name: "Settings", button: <SettingsIcon /> },
];

const AsideButton = ({ button }) => {
    return (
        <button className="aside-button">
            <div>{button.button}</div>
            <div>{button.name}</div>
        </button>
    );
};

const SideBar = () => {
    const { shouldSidebarOpen, setShouldSidebarOpen } = useSidebarContext();

    const handleCrossClick = () => {
        setShouldSidebarOpen(false);
    };

    return (
        <aside
            className={`sidebar ${
                shouldSidebarOpen ? "util-side-bar-open" : null
            }`}
        >
            <div className="logo-and-icon-wrapper">
                <div className="logo">VASITUM</div>
                <button
                    className="cross-icon"
                    onClick={() => handleCrossClick()}
                >
                    <CloseIcon />
                </button>
            </div>
            <div>Main menu</div>
            <div className="aside-buttons aside-main-menu-buttons">
                {asideMainMenuButtons.map(button => {
                    return <AsideButton button={button} key={button.name} />;
                })}
            </div>
            <div>Other</div>
            <div className="aside-buttons aside-other-buttons">
                {asideOtherButtons.map(button => {
                    return <AsideButton button={button} key={button.name} />;
                })}
            </div>
        </aside>
    );
};
export default SideBar;
