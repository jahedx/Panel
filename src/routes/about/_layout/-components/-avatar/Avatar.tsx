import { ChevronRightIcon, ChevronUpIcon, LogoutIcon } from "@/assets/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Avatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full bg-background-secondary hover:bg-background-secondary/80 rounded-xl transition-colors cursor-pointer p-3 flex items-center gap-3">
        <img
          src="https://img.a.transfermarkt.technology/portrait/header/14421-1719153884.jpg?lm=1"
          className="rounded-full h-10 w-10 object-cover ring-2 ring-border"
          alt="User avatar"
        />
        <div className="flex-1 text-right">
          <h1 className="font-bold text-foreground">داود بکام نژاد</h1>
          <p className="text-sm text-foreground-secondary">مدیر</p>
        </div>
        <ChevronUpIcon className="text-lg text-foreground-secondary hover:text-primary-600 transition-colors" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-2 bg-card border border-border">
        <DropdownMenuItem className="flex items-center gap-2 rounded-lg hover:bg-background-secondary">
          <span>پروفایل</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 rounded-lg hover:bg-background-secondary">
          <span>صورتحساب</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 rounded-lg hover:bg-background-secondary">
          <span>تیم</span>
        </DropdownMenuItem>
        <div className="h-[1px] bg-border my-2" />
        <DropdownMenuItem className="flex items-center justify-between rounded-lg text-error hover:bg-error/10 hover:text-error">
          <div className="flex items-center gap-2">
            <LogoutIcon className="h-4 w-4" />
            <span>خروج از حساب</span>
          </div>
          <ChevronRightIcon className="h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Avatar;
