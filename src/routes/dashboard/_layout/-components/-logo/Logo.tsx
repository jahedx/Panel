import { SlackIcon } from "@/assets/Icons";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { useNavigate } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";

interface LogoProps {
  isCollapsed?: boolean;
}

const Logo = ({ isCollapsed }: LogoProps) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate({ to: "/" });
  };
  const { toggleCollapse } = useContext<SidebarContextProps>(SidebarContext);

  return (
    <div className="flex items-center h-16 px-4 border-b w-full gap-2 py-1">
      <div
        onClick={navigateTo}
        className="flex items-center gap-2 py-1 justify-center text-primary-600 cursor-pointer overflow-hidden w-full"
      >
        <div
          className={`transition-all duration-1000 ${isCollapsed ? "scale-110 absolute" : ""}`}
        >
          <SlackIcon />
        </div>
        <h1
          className={`font-bold text-xl whitespace-nowrap transition-all duration-1000 ease-in-out ${
            isCollapsed
              ? "translate-x-10 opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          Panel Demo
        </h1>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleCollapse?.();
        }}
        className="absolute -left-4 bg-card hover:bg-neutral-200 rounded-lg border p-1.5 cursor-pointer transition-colors md:flex hidden items-center justify-center shadow-sm"
      >
        <ChevronRight size={16} className={isCollapsed ? "rotate-180" : ""} />
      </button>
    </div>
  );
};

export default Logo;
