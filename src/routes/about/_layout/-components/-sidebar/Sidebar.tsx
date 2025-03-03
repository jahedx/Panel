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
    <>
      <div
        className={`w-sidebar p-2 bg-card rounded-md m-2 text-card-txt-old fixed z-50 ${
          sidebarStatus == "open" ? "left-[calc(100%-21rem)] " : "left-full"
        } top-0 bg-sidebar-bg transition-[left] h-[calc(100vh-16px)] text-sidebar-txt ease-in-out duration-1000 flex flex-col`}
      >
        <div className="p-4 flex justify-between w-full">
          <Logo />
          <p
            className="hover:bg-muted h-fit rounded-lg p-0.5 h"
            onClick={toggleSidebar}
          >
            <ArrowRightToLineIcon className="cursor-pointer transition-colors " />
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
      <div
        onClick={toggleSidebar}
        className={`bg-gray-500/60 h-screen z-30 absolute top-0 w-full md:hidden duration-1000 transition-all left-0 ${sidebarStatus === "closed" && "hidden"}`}
      />
    </>
  );
}
