import React from 'react';
import { Link } from '@tanstack/react-router';
import { TabsTrigger } from './Tab';

type Props = { children: React.ReactNode; value: string; params: string };

const TabTrigger = ({ children, value, params }: Props) => {
  return (
    <TabsTrigger value={value}>
      <Link
        className="text-center px-3 py-[0.45rem] w-full h-full"
        to="/registration/info/$tab"
        params={{ tab: params }}
        data-test={params + '-tab'}
      >
        {children}
      </Link>
    </TabsTrigger>
  );
};

export default TabTrigger;
