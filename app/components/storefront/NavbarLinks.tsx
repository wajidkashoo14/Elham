"use client";
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
    name: "Shop",
    href: "/products/all",
  },
  // {
  //   id: 1,
  //   name: "All Products",
  //   href: "/products/all",
  // },
  // {
  //   id: 2,
  //   name: "Handicrafts",
  //   href: "/products/handicrafts",
  // },
  // {
  //   id: 3,
  //   name: "Clothing",
  //   href: "/products/clothing",
  // },
  {
    id: 3,
    name: "Our Story",
    href: "/products/clothing",
  },
  {
    id: 4,
    name: "Journal",
    href: "/aboutus",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contactus",
  },
];

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div
      className="hidden md:flex justify-center items-center gap-x-2
    "
    >
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group p-2 front-medium rounded-md color-[#213869]"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
