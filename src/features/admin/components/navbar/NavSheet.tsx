import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Logo from "@/assets/Logo.png";
import { lazy, Suspense } from "react";
const NavMenu = lazy(() =>
  import("./NavMenu").then((module) => ({ default: module.NavMenu }))
);
import Loading from "@/shared/components/Loading";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Main navigation menu for admin dashboard
          </SheetDescription>
        </VisuallyHidden>

        <img
          src={Logo}
          alt="Logo"
          className="object-contain size-24 mx-auto"
          loading="lazy"
        />
        <Suspense fallback={<Loading />}>
          <NavMenu orientation="vertical" className="[&>div]:h-full" />
        </Suspense>
      </SheetContent>
    </Sheet>
  );
};
