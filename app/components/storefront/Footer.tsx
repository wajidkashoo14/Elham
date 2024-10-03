import React from "react";
export default function Footer() {
  return (
    <>
      <div className="pb-10">
        <div className="mx-auto container pt-20 lg:pt-44 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3">
            <h1 className="text-2xl font-black">Elham 2024</h1>
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center">
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  All Products
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Handicrafts
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Clothing
                </li>
                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
              </ul>
            </div>
            <div className="text-sm text-color mb-10 f-f-l">
              <p> © 2024 Prodify. All rights reserved</p>
            </div>
          </div>
          <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
        </div>
      </div>
    </>
  );
}
