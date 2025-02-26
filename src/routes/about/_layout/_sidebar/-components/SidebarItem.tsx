import React, { MouseEventHandler } from "react";
import { Link } from "@tanstack/react-router";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

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
function SidebarItem({
  icon,
  name,
  children,
  link,
  value,
  isMain = false,
  disable = false,
  onClick,
  dataTest,
}: Props) {
  const renderContent = () => (
    <div className="w-full flex h-full items-center">
      <div className="content-center box-decoration-slice w-12 h-[46px] shrink-0 te bg-[#394E5C] text-white">
        {icon}
      </div>
      <div className="w-full font-bold">
        <p>{name}</p>
      </div>
    </div>
  );

  return (
    <>
      {children ? (
        <AccordionItem value={value ?? ""} className="text-white">
          <AccordionTrigger
            className={`[&>svg]:hidden w-full h-12 p-0 bg-[#517A92] data-[state=open]:bg-[#394E5C] hover:no-underline`}
          >
            {renderContent()}
          </AccordionTrigger>
          <AccordionContent className="pb-0 font-bold">{children}</AccordionContent>
        </AccordionItem>
      ) : isMain ? (
        <Link
          to={link ?? "#"}
          activeProps={{ className: "bg-sidebar-item-bg-selected-hover" }}
          onClick={(event: unknown) => {
            if (onClick) onClick(event as unknown as React.MouseEvent<HTMLAnchorElement>);
          }}
          data-test={dataTest}
        >
          <div
            className={`[&>svg]:hidden w-full border-y text-center border-[#A0BBCC] h-12 p-0 bg-[#517A92] hover:bg-[#394E5C] hover:no-underline`}
          >
            {renderContent()}
          </div>
        </Link>
      ) : (
        <Link
          to={link ?? "#"}
          className={`flex py-3 w-full px-5 p-2 justify-center border hover:bg-sidebar-item-bg-selected-hover border-[#A0BBCC] bg-[#769DB4] ${disable ? "bg-[#5b7e92a2] pointer-events-none" : ""}`}
          activeProps={{ className: "bg-sidebar-item-bg-selected-hover" }}
          onClick={(event: unknown) => {
            if (onClick) onClick(event as unknown as React.MouseEvent<HTMLAnchorElement>);
          }}
          data-test={dataTest}
        >
          <p>{name}</p>
        </Link>
      )}
    </>
  );
}

export default SidebarItem;
