import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";
import type { ComponentProps } from "react";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => {
  const isVertical = props.orientation === "vertical";

  const getLinkClassName = (isActive: boolean) => {
    const baseClasses = "transition-all duration-300 px-4 py-3 relative block";
    
    const sizeClasses = isVertical
      ? "text-xl font-semibold"
      : "text-xl font-bold";

    if (isActive) {
      return isVertical
        ? `${baseClasses} ${sizeClasses} text-coffee bg-coffee/10 rounded-lg border-r-4 border-coffee shadow-sm`
        : `${baseClasses} ${sizeClasses} text-coffee after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-coffee after:rounded-t-full after:shadow-lg`;
    }

    return `${baseClasses} ${sizeClasses} text-coffee/60 hover:text-coffee hover:bg-coffee/5 rounded-lg`;
  };

  return (
    <NavigationMenu {...props} dir="rtl">
      <NavigationMenuList className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start [&_a]:text-xl [&_a]:font-semibold">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink
              to="/admin/dashboard"
              end
              replace
              className={({ isActive }) => getLinkClassName(isActive)}
            >
              الرئيسية
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink
              to="/admin/dashboard/new-product"
              replace
              className={({ isActive }) => getLinkClassName(isActive)}
            >
              اضافة منتج جديد
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
