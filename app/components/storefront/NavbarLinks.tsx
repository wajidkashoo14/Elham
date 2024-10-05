"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./NavDropdown";

export const navbarLinks = [
  // {
  //   id: 0,
  //   name: "Home",
  //   href: "/",
  // },
  // {
  //   id: 1,
  //   name: "Shop",
  //   href: "/products/all",
  // },
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
  // {
  //   id: 3,
  //   name: "Our Story",
  //   href: "/products/clothing",
  // },
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
    desc: "Handcrafted clothing, made with care for a truly unique style.",
    image: "/clothing-icon.svg",
  },
  {
    href: "/products/handicrafts",
    label: "Crafted Goods",
    desc: "Beautifully crafted goods, designed with care for a unique touch.",
    image: "/crafted-goods.png",
  },
  {
    href: "/products/all",
    label: "Kashmir Collection",
    desc: "Exquisite Kashmiri paper mache, crafted by hand with tradition and care.",
    image: "/draw-icon.png",
  },
];
const ourJourneyDropdownOptions = [
  {
    href: "/founder",
    label: "About the Founder",
    desc: "A brief introduction/my background + vision + motivations",
    image: "/clothing-icon.svg",
  },
  {
    href: "/artisans",
    label: "Meet Our Artisans",
    desc: "Highlighting the skills, stories of the artisans we work with",
    image: "/crafted-goods.png",
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
      <Dropdown triggerText="Our Journey" options={ourJourneyDropdownOptions} />
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
