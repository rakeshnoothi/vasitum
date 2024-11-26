import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContextProvider";

const useSidebarContext = () => {
    return useContext(SidebarContext);
};
export default useSidebarContext;
