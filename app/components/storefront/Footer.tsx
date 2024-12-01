import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="py-10 w-full px-6 md:px-10 lg:px-14 min-h-[60vh] bg-gray-100">
        <div className="container flex flex-wrap lg:flex-nowrap items-start justify-between gap-8 lg:gap-0 max-w-full mb-10">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 bg-gray-100">
            <Image
              src="/primarylogo1.jpg"
              alt="Logo"
              height={70}
              width={200}
              className="h-[30px] w-[150px] object-cover mx-auto lg:mx-0"
            />
            <p className="text-sm md:w-[20rem] sm:w-full text-gray-700 mt-4 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              cumque qui reiciendis harum molestias quae possimus ipsum,
              perferendis perspiciatis quam, aspernatur aperiam. Quam, magnam!
              Corporis perferendis voluptatum beatae id voluptas eum quae
              eveniet illum possimus.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full lg:w-1/5 text-black flex flex-col items-center lg:items-start">
            <h1 className="text-lg font-medium">Quick Links</h1>
            <ul className="my-3 text-base flex flex-col gap-2 text-center lg:text-left text-gray-700">
              <li>
                <Link href="/products/handicrafts" className="hover:underline">
                  Kashmir Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/products/crafted-goods"
                  className="hover:underline"
                >
                  Crafted Goods
                </Link>
              </li>
              <li>
                <Link href="/products/clothing" className="hover:underline">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products/all" className="hover:underline">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="#faq" id="faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="w-full lg:w-1/5 text-black flex flex-col items-center lg:items-start">
            <h1 className="text-lg font-medium">About Us</h1>
            <ul className="my-3 text-base flex flex-col gap-2 text-center lg:text-left text-gray-700">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:underline">
                  Founders
                </Link>
              </li>
              <li>
                <Link href="/artisans" className="hover:underline">
                  Artisans
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:underline">
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="w-full lg:w-1/3 text-black flex flex-col items-center lg:items-start">
            <h1 className="text-lg font-medium">Connect</h1>
            <p className="mt-3 text-sm text-gray-700 text-center lg:text-left">
              Get early info about our latest products
            </p>
            <div className="flex gap-4 my-4 justify-center lg:justify-start">
              <Link href="https://www.facebook.com/elham.fr/" target="_blank">
                <FaFacebookSquare className="w-6 h-6 text-[#213869]" />
              </Link>
              <Link
                href="https://www.instagram.com/shopelham.fr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
              >
                <FaInstagramSquare className="w-6 h-6 text-[#213869]" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/elham-fr?trk=profile-position"
                target="_blank"
              >
                <FaLinkedin className="w-6 h-6 text-[#213869]" />
              </Link>
              <Link href="/" target="_blank">
                <FaSquarePinterest className="w-6 h-6 text-[#213869]" />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Input type="email" placeholder="Email" className="w-3/4" />
              <Button className="w-[5rem] md:w-1/4 text-sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-sm text-gray-700 text-center mt-10">
          <p>
            © 2024 Elham. All rights reserved. Designed and developed by{" "}
            <Link
              href="https://wajid-portfolio.vercel.app/"
              className="hover:underline"
            >
              Wajid Kashoo
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
