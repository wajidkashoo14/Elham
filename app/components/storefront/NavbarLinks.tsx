import Link from "next/link";

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
  return (
    <div className="hidden md:flex justify-center items-center gap-x-10
    ">
      {navbarLinks.map((item) => (
        <Link href={item.href} key={item.id} className="font-medium">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
