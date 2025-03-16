import { HouseIcon, PanelsRightBottomIcon } from "@/assets/Icons";
import React from "react";

export interface SidebarItemType {
  subItems?: SidebarItemType[];
  value: string;
  link?: string;
  icon: React.ReactNode;
  name: string;
  disable?: boolean;
  isMain?: boolean;
  onClick?: (event: React.MouseEvent) => Promise<void>;
}

export const SidebarList = (): SidebarItemType[] => {
  return [
    {
      value: "firstPage",
      icon: <HouseIcon size={20} stroke={2.5} />,
      name: "داشبورد",
      link: "/about/ready",
      isMain: true,
    },
    {
      value: "firstPage",
      icon: <PanelsRightBottomIcon size={20} stroke={2.5} />,
      name: "صفحه 1",
      link: "/about",

      isMain: true,
    },
    {
      value: "firstPage",
      icon: <PanelsRightBottomIcon size={20} stroke={2.5} />,
      name: "صفحه 2",
      link: "/about/ready2",
      isMain: true,
    },
    {
      value: "firstPage",
      icon: <PanelsRightBottomIcon size={20} stroke={2.5} />,
      name: "صفحه 3",
      link: "/about/ready3",
      isMain: true,
    },
    // {
    //   value: "preRegister",
    //   icon: "",
    //   name: "صفحه 1",
    //   subItems: [
    //     {
    //       value: "valueTitle",
    //       icon: "",
    //       name: "صفحه 1-1",
    //       link: "/about",
    //     },
    //     {
    //       value: "valueTitle",
    //       icon: "",
    //       name: "صفحه 2-1",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   value: "status",
    //   icon: "",
    //   name: "صفحه-2",
    //   subItems: [
    //     {
    //       value: "valueTitle",
    //       icon: "",
    //       name: "صفحه-2-2",
    //       link: "#",
    //     },
    //     {
    //       value: "valueTitle",
    //       icon: "",
    //       name: "صفحه2-2",
    //       link: "#",
    //     },
    //     {
    //       value: "valueTitle",
    //       icon: "",
    //       name: "صفحه13",
    //       disable: true,
    //       link: "#",
    //     },
    //   ],
    // },
  ];
};
