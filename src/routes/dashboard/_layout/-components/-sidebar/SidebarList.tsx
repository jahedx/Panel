import { BellIcon, HouseIcon, ScaleIcon, UnplugIcon, UserCogIcon } from '@/assets/Icons';
import React from 'react';

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
      value: 'dashboard',
      icon: <HouseIcon size={20} stroke={2.5} />,
      name: 'داشبورد',
      link: '/dashboard',
      isMain: true,
    },
    {
      value: 'users',
      icon: <UserCogIcon size={20} stroke={2.5} />,
      name: 'مدیریت کاربران',
      link: '/dashboard/users',

      isMain: true,
    },
    {
      value: 'devices',
      icon: <UnplugIcon size={20} stroke={2.5} />,
      name: 'دستگاه ها و سازمان ها',
      link: '/dashboard/devices',
      isMain: true,
    },
    {
      value: 'rules',
      icon: <ScaleIcon size={20} stroke={2.5} />,
      name: 'قوانین و اقدامات ',
      link: '/dashboard/rules',
      isMain: true,
    },
    {
      value: 'notifications',
      icon: <BellIcon size={20} stroke={2.5} />,
      name: 'اعلان ها  و پیام ها',
      link: '/dashboard/notifications',
      isMain: true,
    },
  ];
};
