"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    name: "Handicrafts",
    href: "/products/handicrafts",
  },
  {
    id: 2,
    name: "Clothing",
    href: "/products/clothing",
  },
];

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div
      className="hidden md:flex justify-center items-center gap-x-4
    "
    >
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75", "group p-2 front-medium rounded-md"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
