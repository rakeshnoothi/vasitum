import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
    const [shouldSidebarOpen, setShouldSidebarOpen] = useState(false);
    return (
        <SidebarContext.Provider
            value={{ shouldSidebarOpen, setShouldSidebarOpen }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
export default SidebarContextProvider;
