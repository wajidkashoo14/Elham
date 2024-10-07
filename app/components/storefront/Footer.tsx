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
      <div className="pb-10 w-full px-14 min-h-[60vh]">
        <div className=" container lg:pt-44 flex items-start justify-between max-w-full mb-10">
          <div className="w-1/3">
            <Image
              src="/primarylogo1.jpg"
              alt="Logo"
              height={70}
              width={200}
              className="h-[30px] w-[150px] object-cover -ml-[5]"
            />
            <p className="text-xm text-gray-700 mt-3 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              cumque qui reiciendis harum molestias quae possimus ipsum,
              perferendis perspiciatis quam, aspernatur aperiam. Quam, magnam!
              Corporis perferendis voluptatum beatae id voluptas eum quae
              eveniet illum possimus.
            </p>
          </div>
          <div className="text-black flex flex-col md:items-center">
            <h1 className="text-xl font-medium">Quick Links</h1>
            <div className="my-3 text-base text-color f-f-l">
              <ul className="md:flex flex-col gap-1 items-center text-center justify-center text-[15px] text-gray-700">
                <Link
                  href="/products/handicrafts"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  Kashmir Collection
                </Link>
                <Link
                  href="/products/crafted-goods"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  Crafted Goods
                </Link>
                <Link
                  href="/products/clothing"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  Clothing
                </Link>
                <Link
                  href="/products/all"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  All Products
                </Link>
                <Link
                  href="#faq"
                  id="faq"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  FAQ
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-black flex items-center justify-center flex-col md:items-center f-f-l">
            <h1 className="text-xl font-medium">About us</h1>
            <div className="my-3 text-base text-color">
              <ul className="md:flex flex-col gap-1 items-center justify-center text-[15px] text-gray-700">
                <Link
                  href="/privacy-policy"
                  className="cursor-pointer pt-4 lg:py-0"
                >
                  Privacy Policy
                </Link>
                <Link href="/founder" className="cursor-pointer pt-4 lg:py-0">
                  Founders
                </Link>
                <Link href="/artisans" className="cursor-pointer pt-4 lg:py-0">
                  Artisans
                </Link>
                <Link href="/aboutus" className="cursor-pointer pt-4 lg:py-0">
                  Journal
                </Link>
                <Link
                  href="https://www.google.com/"
                  className="cursor-pointer pt-4 lg:py-0"
                  target="_blank"
                >
                  Press
                </Link>
              </ul>
            </div>
          </div>
          <div className="text-black flex flex-col f-f-l">
            <h1 className="text-xl font-medium text-left">Conect</h1>
            <div className="flex flex-col gap-5">
              <p className="mt-3 text-[15px] text-gray-700">
                Get early info about our latest products
              </p>
              <div className="flex items-center gap-2">
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
                <Input type="email" placeholder="Email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          {/* s */}
        </div>
        <div className="text-sm text-color mb-6 f-f-l text-center">
          <p>
            {" "}
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
