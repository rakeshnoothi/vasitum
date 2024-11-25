import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left-section">
                <button>
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
