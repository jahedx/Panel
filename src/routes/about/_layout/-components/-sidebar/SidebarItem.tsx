import React, { MouseEventHandler } from "react";
import { Link, useLocation } from "@tanstack/react-router";

type Props = {
  active?: boolean;
  isMain?: boolean;
  name: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;

  link?: string;

  value?: string;

  disable?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  dataTest?: string;
};

function SidebarItem({ icon, name, link, onClick }: Props) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <>
      <Link
        to={link ?? "#"}
        onClick={(event: unknown) => {
          if (onClick)
            onClick(event as unknown as React.MouseEvent<HTMLAnchorElement>);
        }}
      >
        <div
          className={`[&>svg]:hidden rounded-lg mr-[2.5px] w-full h-12 p-0 hover:no-underline ${isActive && "bg-primary-50 mr-0 border border-primary-200 text-primary"}`}
        >
          <div
            className={`${isActive ? "text-primary-600" : "text-foreground"} mx-auto w-full text-center flex h-full items-center`}
          >
            <div className="content-center text-center w-12 h-[46px] shrink-0 ">
              {icon}
            </div>
            <div className={`font-semibold`}>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SidebarItem;
