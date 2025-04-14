import { useContext } from 'react';
import { SidebarContext, SidebarContextProps } from '@/contexts/SidebarContext';
import { SidebarList, SidebarItemType } from './SidebarList';
import SidebarItem from './SidebarItem';
import Avatar from '../-avatar/Avatar';
import Logo from '../-logo/Logo';
import SearchBar from './SearchBar';

export default function Sidebar({ empty = false }: { empty?: boolean }) {
  const { sidebarStatus, isCollapsed, toggleSidebar } =
    useContext<SidebarContextProps>(SidebarContext);
  const sidebarItems = SidebarList();

  return (
    <>
      <div
        className={`pb-2 bg-card text-card-txt-old fixed z-50 ${
          sidebarStatus === 'open'
            ? isCollapsed
              ? 'w-16 left-[calc(100%-4rem)]'
              : 'w-sidebar left-[calc(100%-17rem)]'
            : 'left-full w-sidebar'
        } top-0 bg-sidebar-bg h-screen text-sidebar-txt flex flex-col border-l transition-[width,left] duration-1000`}
      >
        <Logo isCollapsed={isCollapsed} />

        <div className="overflow-hidden">
          <div
            className={`transition-all duration-1000 ease-in-out ${
              isCollapsed ? 'translate-x-10 opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <SearchBar />
          </div>
        </div>

        {!empty && (
          <div
            className={`flex-1 flex flex-col gap-3 transition-all duration-300 ${
              isCollapsed ? 'mx-2' : 'mx-4'
            }`}
          >
            {sidebarItems?.map((item: SidebarItemType, i: number) => (
              <SidebarItem
                key={i}
                value={item.value}
                icon={item.icon}
                name={item.name}
                isMain={item.isMain}
                link={item.link}
                onClick={item.onClick}
                collapsed={isCollapsed}
              />
            ))}
          </div>
        )}

        <div className={`mx-auto transition-all w-full py-4 ${isCollapsed ? 'px-2' : 'px-4'}`}>
          <Avatar isCollapsed={isCollapsed} />
        </div>
      </div>

      <div
        onClick={toggleSidebar}
        className={`bg-gray-500/60 h-screen z-30 absolute top-0 w-full md:hidden duration-1000 transition-all left-0 ${
          sidebarStatus === 'closed' && 'hidden'
        }`}
      />
    </>
  );
}
