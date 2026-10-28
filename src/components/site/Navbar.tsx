import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { brand, navItems } from "@/content/site.tsx";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-paper-border bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-site grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
      >
        <a
          href="#top"
          className="min-w-0 truncate rounded-sm font-display text-2xl leading-none text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {brand.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button asChild variant="navLink" size="nav">
                <a href={item.href}>{item.label}</a>
              </Button>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <Button asChild variant="wine" size="pillSm" className="hidden md:inline-flex">
            <a href="#contact">Contact</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="touch" className="md:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetTitle className="font-script text-3xl font-normal text-primary">
                {brand.name}
              </SheetTitle>
              <ul className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Button
                      asChild
                      variant="navLink"
                      size="nav"
                      className="w-full justify-start"
                      onClick={() => setOpen(false)}
                    >
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="wine"
                size="pill"
                className="mt-8 w-full"
                onClick={() => setOpen(false)}
              >
                <a href="#contact">Contact</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
