import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Background from "./components/Background";
import SidebarContextProvider from "./context/SidebarContextProvider";

function App() {
    return (
        <div className="global-wrapper">
            <SidebarContextProvider>
                <Sidebar />
                <Background />
            </SidebarContextProvider>
        </div>
    );
}

export default App;
