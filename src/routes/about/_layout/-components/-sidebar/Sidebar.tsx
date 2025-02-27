import { useContext } from "react";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { SidebarList, SidebarItemType } from "./SidebarList";
import SidebarItem from "./SidebarItem";
import Avatar from "../-avatar/Avatar";
import Logo from "../-logo/Logo";
import SearchBar from "./SearchBar";
import { ArrowRightToLineIcon } from "@/assets/Icons";

export default function Sidebar({ empty = false }: { empty?: boolean }) {
  const { sidebarStatus, toggleSidebar } =
    useContext<SidebarContextProps>(SidebarContext);
  const sidebarItems = SidebarList();

  return (
    <div
      className={`md:w-sidebar p-2 w-[calc(100%-16px)] bg-card rounded-md m-2 text-card-txt-old lg:z-0 fixed z-50 ${
        sidebarStatus == "open"
          ? "left-0 md:left-[calc(100%-366px)] "
          : "left-full"
      } top-0 bg-sidebar-bg transition-[left] h-[calc(100vh-16px)] text-sidebar-txt ease-in-out duration-1000 flex flex-col`}
    >
      <div className="p-4 flex justify-between w-full">
        <Logo />
        <p onClick={toggleSidebar}>
          <ArrowRightToLineIcon className="cursor-pointer hover:text-primary-700 transition-colors text-xl" />
        </p>
      </div>
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
  );
}
