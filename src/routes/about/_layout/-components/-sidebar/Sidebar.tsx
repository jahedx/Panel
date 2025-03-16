import { useContext } from "react";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { SidebarList, SidebarItemType } from "./SidebarList";
import SidebarItem from "./SidebarItem";
import Avatar from "../-avatar/Avatar";
import Logo from "../-logo/Logo";
import SearchBar from "./SearchBar";

export default function Sidebar({ empty = false }: { empty?: boolean }) {
  const { sidebarStatus, toggleSidebar } =
    useContext<SidebarContextProps>(SidebarContext);
  const sidebarItems = SidebarList();

  return (
    <>
      <div
        className={`w-sidebar pb-2 bg-card text-card-txt-old fixed z-50 ${
          sidebarStatus == "open" ? "left-[calc(100%-17rem)] " : "left-full"
        } top-0 bg-sidebar-bg transition-[left] h-screen text-sidebar-txt ease-in-out duration-1000 flex flex-col border-l`}
      >
        <Logo />

        <SearchBar />
        {!empty && (
          <div className="flex-1 flex flex-col gap-3 mx-4">
            {sidebarItems?.map((item: SidebarItemType, i: number) => (
              <SidebarItem
                key={i}
                value={item.value}
                icon={item.icon}
                name={item.name}
                isMain={item.isMain}
                link={item.link}
                onClick={item.onClick}
              />
            ))}
          </div>
        )}

        <div className="p-4 center">
          <Avatar />
        </div>
      </div>
      <div
        onClick={toggleSidebar}
        className={`bg-gray-500/60 h-screen z-30 absolute top-0 w-full md:hidden duration-1000 transition-all left-0 ${sidebarStatus === "closed" && "hidden"}`}
      />
    </>
  );
}
