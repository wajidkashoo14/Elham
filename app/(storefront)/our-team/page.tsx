import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurTeam() {
  return (
    <div>
      <div className="py-10 flex justify-between">
        <div className="flex flex-col items-start gap-5 w-1/2">
          <h1 className="text-2xl font-semibold">Our team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            doloremque commodi error nobis possimus neque dolores, eaque quia
            dolore, voluptatibus iure quibusdam rem similique! Nulla minima
            voluptates cupiditate, facilis nemo odit totam! Magnam velit
            consectetur quidem ut, pariatur numquam nisi.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col items-start">
            <div className="w-[180px] h-[220px] bg-[#213869] rounded-lg mb-5 flex flex-col gap-3 items-center justify-center">
              <Image
                src="/pic.jpeg"
                alt="Team Member"
                width={120}
                height={120}
                className="h-[120px] w-[120px] rounded-full"
              />
              <h2 className="text-gray-300 font-medium">Wajid Hussain</h2>
              <p className="text-gray-300 text-sm italic">
                Paper Machie Artist
              </p>
            </div>
            <div className="w-[180px] h-[220px] bg-[#213869] rounded-lg mb-5 flex flex-col gap-3 items-center justify-center">
              <Image
                src="/pic.jpeg"
                alt="Team Member"
                width={120}
                height={120}
                className="h-[120px] w-[120px] rounded-full"
              />
              <h2 className="text-gray-300 font-medium">Wajid Hussain</h2>
              <p className="text-gray-300 text-sm italic">
                Paper Machie Artist
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end mt-10">
            <div className="w-[180px] h-[220px] bg-[#213869] rounded-lg mb-5 flex flex-col gap-3 items-center justify-center">
              <Image
                src="/pic.jpeg"
                alt="Team Member"
                width={120}
                height={120}
                className="h-[120px] w-[120px] rounded-full"
              />
              <h2 className="text-gray-300 font-medium">Wajid Hussain</h2>
              <p className="text-gray-300 text-sm italic">
                Paper Machie Artist
              </p>
            </div>
            <div className="w-[180px] h-[220px] bg-[#213869] rounded-lg mb-5 flex flex-col gap-3 items-center justify-center">
              <Image
                src="/pic.jpeg"
                alt="Team Member"
                width={120}
                height={120}
                className="h-[120px] w-[120px] rounded-full"
              />
              <h2 className="text-gray-300 font-medium">Wajid Hussain</h2>
              <p className="text-gray-300 text-sm italic">
                Paper Machie Artist
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Elham Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptates nam veniam rem! Ad maxime accusantium mollitia qui atque minus delectus nam? Cumque, hic quas? Sapiente error cum quisquam laborum magni eos corrupti deserunt, similique omnis tempora amet, dolor quas nulla totam reprehenderit! Rerum a dolores deleniti dolorum accusamus quas ipsum ut hic! Consequuntur illo nulla quo perspiciatis debitis libero aliquam et quos magni? Voluptatem voluptates explicabo possimus iusto incidunt dolore unde dolorem sapiente recusandae repellat consequuntur, dicta ad beatae placeat veniam accusantium, cupiditate quam? Cum quia, vel sed, dolorum accusamus ut molestias quaerat, omnis dolorem nisi expedita sequi eveniet!
        </p>
      </div>
    </div>
  );
}
