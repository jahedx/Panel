import { CalendarIcon, PanelRighIcon } from "@/assets/Icons";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import moment from "moment-jalaali";

import { useContext } from "react";

const Header = () => {
  const { sidebarStatus, toggleSidebar } =
    useContext<SidebarContextProps>(SidebarContext);
  moment.loadPersian({ dialect: "persian-modern", usePersianDigits: false });

  const date = moment().format("dddd jD jMMMM");

  return (
    <div className="w-full sticky top-0 h-16 bg-card flex items-center px-2 my-2 ml-2">
      <p
        className="hover:bg-muted p-0.5 rounded-lg cursor-pointer ease-out duration-300"
        onClick={toggleSidebar}
      >
        <PanelRighIcon
          className={`${sidebarStatus === "open" && "hidden"} cursor-pointer text-2xl`}
        />
      </p>
      <div className="flex items-center gap-4 mr-auto">
        <ThemeToggle />
        <span className="flex gap-2 font-bold border py-1 px-2 rounded-md border-foreground/50 text-sm items-center hover:bg-muted cursor-default transition-colors">
          {date}
          <CalendarIcon size={18} stroke={3} />
        </span>
      </div>
    </div>
  );
};

export default Header;
