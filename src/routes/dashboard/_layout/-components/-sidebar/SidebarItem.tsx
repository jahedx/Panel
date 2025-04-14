import React, { MouseEventHandler } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

type Props = {
  active?: boolean;
  isMain?: boolean;
  name: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconSize?: number;
  iconColor?: string;
  children?: React.ReactNode;
  link?: string;
  value?: string;
  disable?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  dataTest?: string;
};

function SidebarItem({ icon, name, link, onClick, collapsed }: Props & { collapsed?: boolean }) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link ?? '#'}
      onClick={(event: unknown) => {
        if (onClick) onClick(event as unknown as React.MouseEvent<HTMLAnchorElement>);
      }}
    >
      <div
        className={`rounded-md w-full h-10 transition-all ${
          isActive ? 'bg-background-secondary shadow-sm' : 'hover:bg-background-secondary/50'
        }`}
      >
        <div
          className={`${
            isActive ? 'text-primary-600 border rounded-md' : 'text-foreground'
          } mx-auto w-full text-center flex h-full items-center hover:text-primary-600 transition-all overflow-hidden`}
        >
          <div className={`content-center text-center mx-3 shrink-0`}>{icon}</div>
          <div
            className={`font-semibold whitespace-nowrap transition-all duration-1000 ease-in-out ${
              collapsed ? 'translate-x-[250%]' : 'translate-x-0'
            }`}
          >
            <p>{name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SidebarItem;
