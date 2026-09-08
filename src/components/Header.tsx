import { Link, NavLink } from "react-router-dom";
import { CarFront, Heart, Menu, Plus } from "lucide-react";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between lg:justify-evenly px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <CarFront className="size-6 text-primary" />

          <span className="text-xl font-bold tracking-tight">
            CAR<span className="text-primary">HUB</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/cars" className={navLinkClass}>
            Cars
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass}>
            Favorites
          </NavLink>
        </nav>

        {/* Desktop actions */}

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Favorites"
            className="cursor-pointer"
          >
            <Heart />
          </Button>

          <Button className="cursor-pointer">
            <Plus />
            Add Car
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <CarFront className="size-5 text-primary" />
                CAR<span className="text-primary">HUB</span>
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-5 px-4">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/cars" className={navLinkClass}>
                Cars
              </NavLink>
              <NavLink to="/favorites" className={navLinkClass}>
                Favorites
              </NavLink>

              <Button className="mt-4 w-full">
                <Plus />
                Add Car
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
