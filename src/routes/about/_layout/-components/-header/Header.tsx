import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

type Props = {};

const Header = (props: Props) => {
  const { sidebarStatus, toggleSidebar } = useContext<SidebarContextProps>(SidebarContext);

  return (
    <div className="w-full h-16 bg-white">
      <FontAwesomeIcon
        onClick={toggleSidebar}
        className={`${sidebarStatus === "open" && "hidden"} p-5 cursor-pointer rotate-90 text-2xl`}
        icon={faWindowMaximize}
      />
    </div>
  );
};

export default Header;
