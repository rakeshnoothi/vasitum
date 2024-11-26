import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useSidebarContext from "../../hooks/useSidebarContext";

const Navbar = () => {
    const { setShouldSidebarOpen } = useSidebarContext();

    const handleMenuClick = () => {
        setShouldSidebarOpen(true);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left-section">
                <button onClick={() => handleMenuClick()}>
                    <MenuIcon />
                </button>
                <button>
                    <SearchIcon />
                </button>
            </div>
            <div className="navbar-right-section">
                <button>
                    <NotificationsIcon />
                </button>
                <button>
                    <ChatIcon />
                </button>
                <div className="navbar-right-section-image-block">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <button>
                        <ExpandMoreIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
