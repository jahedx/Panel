/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode } from "react";

type SidebarStatus = "open" | "closed";

export type SidebarContextProps = {
  sidebarStatus?: SidebarStatus;
  smallSidebarStatus?: SidebarStatus;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
};

const defaultContextValue: SidebarContextProps = {
  sidebarStatus: "closed",
  smallSidebarStatus: "closed",
  toggleSidebar: () => {},
  closeSidebar: () => {},
};

export const SidebarContext =
  createContext<SidebarContextProps>(defaultContextValue);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>("open");
  const [smallSidebarStatus, setSmallSidebarStatus] =
    useState<SidebarStatus>("closed");
  const toggleSidebar = () => {
    const newStatus: SidebarStatus =
      sidebarStatus === "closed" ? "open" : "closed";
    setSidebarStatus(newStatus);

    const newSmaillSidebarStatus: SidebarStatus =
      smallSidebarStatus === "closed" ? "open" : "closed";
    setSmallSidebarStatus(newSmaillSidebarStatus);
  };

  const closeSidebar = () => {
    setSidebarStatus("closed");
    setSmallSidebarStatus("closed");
  };

  const contextValue: SidebarContextProps = {
    smallSidebarStatus,
    sidebarStatus,
    toggleSidebar,
    closeSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {" "}
      {children}{" "}
    </SidebarContext.Provider>
  );
};
