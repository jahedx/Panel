import { PanelRighIcon } from "@/assets/Icons";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";

import { useContext } from "react";

const Header = () => {
  const { sidebarStatus, toggleSidebar } =
    useContext<SidebarContextProps>(SidebarContext);

  return (
    <div className="w-full sticky top-0 h-16 bg-card my-2 ml-2">
      <p onClick={toggleSidebar}>
        <PanelRighIcon
          className={`${sidebarStatus === "open" && "hidden"} cursor-pointer text-2xl`}
        />
      </p>
    </div>
  );
};

export default Header;
