import { useContext } from "react";
import { useLocation } from "@tanstack/react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarContext, SidebarContextProps } from "@/contexts/SidebarContext";
import { SidebarList, SidebarItemType } from "./SidebarList";
import SidebarItem from "./SidebarItem";
import { Accordion } from "@/components/shadcn/ui/accordion";

export default function Sidebar({ empty = false }: { empty?: boolean }) {
  const { sidebarStatus, toggleSidebar } = useContext<SidebarContextProps>(SidebarContext);
  const location = useLocation();
  const sidebarItems = SidebarList();

  const defaultOpenAccordion = sidebarItems.find((item: SidebarItemType) =>
    item?.subItems?.some((subItem: SidebarItemType) => subItem?.link === location.pathname)
  )?.value;

  return (
    <div
      className={`xl:w-[350px] w-full bg-white-blocks-pattern text-card-txt-old xl:z-0 xl:static fixed xl:right-0 z-50 ${
        sidebarStatus == "open" ? "left-0" : "left-full"
      } top-0 xl:top-[101px] bg-sidebar-bg transition-[left] min-h-full text-sidebar-txt xl:min-h-screen ease-in-out duration-1000`}
    >
      {!empty && (
        <>
          <FontAwesomeIcon className={`xl:hidden text-black p-5 cursor-pointer`} icon={"x"} />
          <div onClick={toggleSidebar} className="">
            asdjhvaskhjd
          </div>

          <Accordion defaultValue={defaultOpenAccordion} type="single" collapsible>
            {sidebarItems?.map((item: SidebarItemType, i: number) => {
              return (
                <SidebarItem
                  key={i}
                  value={item.value}
                  icon={item.icon}
                  name={item.name}
                  isMain={item.isMain}
                  link={item.link}
                  onClick={item.onClick}
                >
                  {item?.subItems?.map((subItem, j) => {
                    return (
                      <SidebarItem
                        key={j}
                        value={subItem.value}
                        icon={subItem.icon}
                        name={subItem.name}
                        link={subItem.link}
                        disable={subItem.disable}
                        onClick={subItem.onClick}
                      />
                    );
                  })}
                </SidebarItem>
              );
            })}
          </Accordion>
        </>
      )}
    </div>
  );
}
