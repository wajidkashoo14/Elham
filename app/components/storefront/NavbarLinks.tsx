"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./NavDropdown";

export const navbarLinks = [
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

const shopDropdownOptions = [
  {
    href: "/products/clothing",
    label: "Clothing",
  },
  {
    href: "/products/handicrafts",
    label: "Crafted Goods",
  },
  {
    href: "/products/all",
    label: "Kashmir Collection",
  },
];
const ourJourneyDropdownOptions = [
  {
    href: "/founder",
    label: "About the Founder",
  },
  {
    href: "/artisans",
    label: "Meet Our Artisans",
  },
];

export function NavbarLinks() {
  const location = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-3">
      <Link
        href="/"
        className={cn(
          location === "/" ? "bg-muted" : "hover:bg-muted hover:bg-opacity-75",
          "group p-2 font-medium rounded-md color-[#213869]"
        )}
      >
        Home
      </Link>
      <Dropdown triggerText="Shop" options={shopDropdownOptions} />
      <Dropdown triggerText="Our Story" options={ourJourneyDropdownOptions} />
      {navbarLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "group p-2 font-medium rounded-md color-[#213869]"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
