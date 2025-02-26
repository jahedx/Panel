import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";
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
  dataTest?: string;
}

export const SidebarList = (): SidebarItemType[] => {
  return [
    {
      value: "firstPage",
      icon: "",
      name: "",
      link: "/pre-registration/home",
      isMain: true,
    },
    {
      value: "preRegister",
      icon: <FontAwesomeIcon icon={faUpDown} />,
      name: "",
      dataTest: "e-pre-registration",
      subItems: [
        {
          value: "valueTitle",
          icon: "",
          name: "",
          link: "/pre-registration/base-info",
        },
      ],
    },
    {
      value: "status",
      icon: <FontAwesomeIcon icon={faUpDown} />,
      name: "",
      subItems: [
        {
          value: "valueTitle",
          icon: "",
          name: "",
          link: "/pre-registration/status-list",
        },
        {
          value: "valueTitle",
          icon: "",
          name: "",
          link: "/pre-registration/print-info",
        },
        {
          value: "valueTitle",
          icon: "",
          name: "",
          disable: true,
          link: "#",
        },
        {
          value: "valueTitle",
          icon: "",
          disable: true,
          name: "",
          link: "#",
        },
      ],
    },
  ];
};
