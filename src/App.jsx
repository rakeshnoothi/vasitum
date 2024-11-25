import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Background from "./components/Background";

function App() {
    return (
        <div className="global-wrapper">
            <Sidebar />
            <Background />
        </div>
    );
}

export default App;
