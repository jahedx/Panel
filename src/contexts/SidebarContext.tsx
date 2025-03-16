/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode, useEffect } from "react";

type SidebarStatus = "open" | "closed";

export type SidebarContextProps = {
  sidebarStatus?: SidebarStatus;
  isCollapsed?: boolean;
  toggleSidebar?: () => void;
  toggleCollapse?: () => void;
  closeSidebar?: () => void;
};

const defaultContextValue: SidebarContextProps = {
  sidebarStatus: "closed",
  isCollapsed: false,
  toggleSidebar: () => {},
  toggleCollapse: () => {},
  closeSidebar: () => {},
};

export const SidebarContext =
  createContext<SidebarContextProps>(defaultContextValue);

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>("open");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        // Small screen - close sidebar
        setSidebarStatus("closed");
        setIsCollapsed(false);
      } else {
        // Large screen - open sidebar
        setSidebarStatus("open");
      }
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const toggleCollapse = () => {
    if (window.innerWidth >= 768) {
      setIsCollapsed((prev) => !prev);
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setSidebarStatus((prev) => (prev === "closed" ? "open" : "closed"));
    }
  };

  const closeSidebar = () => {
    setSidebarStatus("closed");
  };

  const contextValue: SidebarContextProps = {
    sidebarStatus,
    isCollapsed,
    toggleSidebar,
    toggleCollapse,
    closeSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};
