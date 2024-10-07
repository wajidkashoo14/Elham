import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Founders() {
  return (
    <div>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image
            src="/pic.jpeg"
            alt="founder image"
            height={300}
            width={300}
            className="w-[300] h-[300] rounded-full"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-medium">Wajid Kashoo</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem doloremque, nam delectus possimus, quibusdam consequuntur, inventore repellat dolorem quas placeat autem? Dolor aspernatur ut odit error animi corrupti tempora placeat, in, consequatur facere consequuntur fugit architecto eaque quae et illum quibusdam unde molestiae autem. Odit cupiditate quisquam facere praesentium reprehenderit.
          </p>
          <Button className="max-w-fit">Learn more</Button>
        </div>
      </div>
      <div className="py-20 flex items-center justify-between">
        <div className="w-[350px] h-[350px] bg-[#213869] rounded-lg italic p-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          magnam, dicta inventore fugit commodi quisquam quae sint incidunt,
          aspernatur ratione ad voluptatum aliquid, doloremque sunt quas
          molestias laudantium mollitia error. Libero iure delectus, fuga
          deserunt numquam porro magni facilis enim maxime velit ut. Incidunt
          consequatur labore quod aut laboriosam fugiat
        </div>
        <div className="w-[350px] h-[350px] bg-[#213869] rounded-lg italic p-6 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit in
          consequuntur, excepturi quis, minus voluptatem quasi quod fuga, alias
          sunt at eum consectetur. Tempora ab iste velit, voluptatum inventore
          excepturi corrupti, fugit necessitatibus aliquam totam ratione. Beatae
          est enim, maiores consectetur dolore harum ratione, alias voluptas
          nemo commodi ad obcaecati.
        </div>
        <div className="w-[350px] h-[350px] bg-[#213869] rounded-lg italic p-6 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates, possimus deleniti exercitationem officia quis in totam
          mollitia neque sunt, illo nihil alias, perspiciatis quasi unde? Unde
          consectetur facilis harum aliquid? Culpa alias, temporibus sed
          doloremque expedita repudiandae itaque dolorum minus minima est
          tempora eum vero molestiae sint at reprehenderit.
        </div>
      </div>
    </div>
  );
}
