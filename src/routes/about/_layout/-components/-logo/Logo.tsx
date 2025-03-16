import { SlackIcon } from "@/assets/Icons";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

const Logo = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate({ to: "/" });
  };
  const { toggleSidebar } = useContext<SidebarContextProps>(SidebarContext);

  return (
    <div
      onClick={navigateTo}
      className="flex items-center h-16 px-4 border-b w-full gap-2 py-1 justify-between"
    >
      <div
        onClick={navigateTo}
        className="flex items-center gap-2 py-1 justify-center text-primary-600 cursor-pointer"
      >
        <SlackIcon />
        <h1 className="font-bold text-xl">Panel Demo</h1>
      </div>
      <p
        className="hover:bg-neutral-200 h-fit rounded-lg border p-0.5 h cursor-pointer transition-colors"
        onClick={toggleSidebar}
      >
        <ChevronRight size={16} />
      </p>
    </div>
  );
};

export default Logo;
