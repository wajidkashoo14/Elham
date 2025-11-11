import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="px-4 lg:px-8">
      {/* Introduction Section */}
      <div className="py-10 flex flex-col lg:flex-row items-start lg:justify-between gap-8">
        <div className="flex flex-col items-start gap-5 lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl font-semibold">Our Team</h1>
          <p className="text-sm lg:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            doloremque commodi error nobis possimus neque dolores, eaque quia
            dolore, voluptatibus iure quibusdam rem similique! Nulla minima
            voluptates cupiditate, facilis nemo odit totam! Magnam velit
            consectetur quidem ut, pariatur numquam.
          </p>
          <Button>Learn More</Button>
        </div>

        {/* Team Members Section */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-end">
          {/* Team Member Cards */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-[160px] sm:w-[180px] h-[220px] bg-[#213869] rounded-lg flex flex-col gap-3 items-center justify-center p-4"
            >
              <Image
                src="/pic.jpeg"
                alt="Team Member"
                width={120}
                height={120}
                className="h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] rounded-full"
              />
              <h2 className="text-gray-300 font-medium text-center">
                Wajid Hussain
              </h2>
              <p className="text-gray-300 text-sm italic text-center">
                Paper Machie Artist
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Elham Team Section */}
      <div className="flex flex-col gap-5 mt-10">
        <h1 className="text-2xl lg:text-3xl font-semibold">Elham Team</h1>
        <p className="text-sm lg:text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptates nam veniam rem! Ad maxime accusantium mollitia qui atque
          minus delectus nam? Cumque, hic quas? Sapiente error cum quisquam
          laborum magni eos corrupti deserunt, similique omnis tempora amet,
          dolor quas nulla totam reprehenderit! Rerum a dolores deleniti dolorum
          accusamus quas ipsum ut hic! Consequuntur illo nulla quo perspiciatis
          debitis libero aliquam et quos magni? Voluptatem voluptates explicabo
          possimus iusto incidunt dolore unde dolorem sapiente recusandae
          repellat consequuntur, dicta ad beatae placeat veniam accusantium,
          cupiditate quam? Cum quia, vel sed, dolorum accusamus ut molestias
          quaerat, omnis dolorem nisi expedita sequi eveniet!
        </p>
      </div>
    </div>
  );
}
