import { SidebarContext, SidebarContextProps } from '@/contexts/SidebarContext';
import { useNavigate } from '@tanstack/react-router';
import { ChevronRight } from 'lucide-react';
import { useContext } from 'react';
import logo from '@/assets/images/App-Icons/web-app-manifest.png';

interface LogoProps {
  isCollapsed?: boolean;
}

const Logo = ({ isCollapsed }: LogoProps) => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate({ to: '/' });
  };
  const { toggleCollapse } = useContext<SidebarContextProps>(SidebarContext);

  return (
    <div className="flex items-center h-16 border-b w-full">
      <div
        onClick={navigateTo}
        className={`flex items-center py-1 justify-start text-primary-600 cursor-pointer overflow-hidden w-full relative`}
      >
        <div
          className={`flex items-center mx-4 gap-2 transition-all duration-1000 ${isCollapsed ? 'translate-x-[200%]' : 'translate-x-0'}`}
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="font-bold text-xl whitespace-nowrap">IoT Cloud</h1>
        </div>

        <div
          className={`absolute right-2 transition-all duration-1000 ${isCollapsed ? 'translate-x-0' : 'translate-x-[200%]'}`}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        </div>
      </div>
      <button
        onClick={e => {
          e.stopPropagation();
          toggleCollapse?.();
        }}
        className="absolute -left-4 bg-card hover:bg-neutral-200 rounded-lg border p-1.5 cursor-pointer transition-colors md:flex hidden items-center justify-center shadow-sm"
      >
        <ChevronRight size={16} className={isCollapsed ? 'rotate-180' : ''} />
      </button>
    </div>
  );
};

export default Logo;
