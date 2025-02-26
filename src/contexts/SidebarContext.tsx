import { createContext, useState, ReactNode } from "react";

type SidebarStatus = "open" | "closed";

export type SidebarContextProps = {
  sidebarStatus?: SidebarStatus;
  toggleSidebar?: () => void;
  closeSidebar?: () => void;
};

const defaultContextValue: SidebarContextProps = {
  sidebarStatus: "closed",
  toggleSidebar: () => {},
  closeSidebar: () => {},
};

export const SidebarContext = createContext<SidebarContextProps>(defaultContextValue);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>("open");

  const toggleSidebar = () => {
    const newStatus: SidebarStatus = sidebarStatus === "closed" ? "open" : "closed";
    setSidebarStatus(newStatus);
  };

  const closeSidebar = () => {
    setSidebarStatus("closed");
  };

  const contextValue: SidebarContextProps = {
    sidebarStatus,
    toggleSidebar,
    closeSidebar,
  };

  return <SidebarContext.Provider value={contextValue}> {children} </SidebarContext.Provider>;
};
