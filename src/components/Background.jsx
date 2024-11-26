import Navbar from "./NavBar/NavBar";
import Main from "./Main/Main";
import "./Background.css";
import useSidebarContext from "../hooks/useSidebarContext";

const Background = () => {
    const { shouldSidebarOpen } = useSidebarContext();
    return (
        <div className={`background ${shouldSidebarOpen ? "util-hide" : null}`}>
            <Navbar />
            <Main />
        </div>
    );
};
export default Background;
