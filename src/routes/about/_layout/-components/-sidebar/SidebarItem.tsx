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
          className={`[&>svg]:hidden rounded-lg mr-[2.5px] w-full h-11 transition-all border ${
            isActive
              ? "bg-background-secondary border-border"
              : "border-transparent hover:bg-background-secondary/50"
          }`}
        >
          <div
            className={`${
              isActive ? "text-primary-600" : "text-foreground"
            } mx-auto w-full text-center flex h-full items-center hover:text-primary-600 transition-all`}
          >
            <div className="content-center text-center mx-3 shrink-0">
              {icon}
            </div>
            <div className="font-semibold">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SidebarItem;
