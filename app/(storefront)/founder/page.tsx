import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Founders() {
  return (
    <div className="px-4 lg:px-8">
      {/* Founder Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 w-full">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/pic.jpeg"
            alt="founder image"
            height={300}
            width={300}
            className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-medium">Wajid Kashoo</h1>
          <p className="text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            doloremque, nam delectus possimus, quibusdam consequuntur, inventore
            repellat dolorem quas placeat autem? Dolor aspernatur ut odit error
            animi corrupti tempora placeat, in, consequatur facere consequuntur
            fugit architecto eaque quae et illum quibusdam unde molestiae autem.
            Odit cupiditate quisquam facere praesentium reprehenderit.
          </p>
          <Button className="mx-auto lg:mx-0 max-w-fit">Learn more</Button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[350px] bg-[#213869] rounded-lg italic p-6 text-gray-300 text-center lg:text-left"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            magnam, dicta inventore fugit commodi quisquam quae sint incidunt,
            aspernatur ratione ad voluptatum aliquid, doloremque sunt quas
            molestias laudantium mollitia error.
          </div>
        ))}
      </div>
    </div>
  );
}
