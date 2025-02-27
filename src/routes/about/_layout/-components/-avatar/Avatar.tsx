import { LogoutIcon } from "@/assets/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Avatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-2xl w-full bg-primary-50 hover:bg-primary-100 transition-colors cursor-pointer px-1 py-2 flex gap-4 items-center ">
        <img
          src="https://img.a.transfermarkt.technology/portrait/header/14421-1719153884.jpg?lm=1"
          className="rounded-full h-11 w-11 mx-2  object-cover"
        />
        <div>
          <h1 className="font-bold">داود بکام نژاد</h1>
          <p className="text-foreground/70">مدیر</p>
        </div>
        <LogoutIcon className="text-xl mr-auto ml-4 hover:text-primary-600 transition-colors" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Avatar;
