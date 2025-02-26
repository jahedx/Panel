// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpDown } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      icon: <FontAwesomeIcon icon={faHome} />,
      name: "داشبورد",
      link: "/about/ready",
      isMain: true,
    },
    {
      value: "firstPage",
      icon: "",
      name: "صفحه 1",
      link: "/about",
      isMain: true,
    },
    {
      value: "firstPage",
      icon: "",
      name: "صفحه 2",
      link: "/about/ready2",
      isMain: true,
    },
    {
      value: "firstPage",
      icon: "",
      name: "صفحه 3",
      link: "/about/ready3",
      isMain: true,
    },
    // {
    //   value: "preRegister",
    //   icon: <FontAwesomeIcon icon={faUpDown} />,
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
    //   icon: <FontAwesomeIcon icon={faUpDown} />,
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
