import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function AboutRoute() {
  return (
    <div className="mt-8">
      <h1 className="text-transform: uppercase text-5xl font-semibold py-10 text-center border-b-[5px] border-black border-t-[5px]">
        about us
      </h1>
      <div className="flex items-start justify-between py-10">
        <div>
          <Image
            src="/img1.jpg"
            alt="product image"
            height={600}
            width={400}
            className="h-[600px] w-[600px] object-cover"
          />
        </div>
        <div className="text-right py-10">
          <h1 className="text-5xl font-extrabold">Handmade Treasures</h1>
          <h1 className="text-5xl font-extrabold">Skilled Craftsmanship</h1>
          <h1 className="text-5xl font-extrabold">Timeless Beauty</h1>
          <h1 className="text-5xl font-extrabold">Masterful Creations</h1>
          <h1 className="text-5xl font-extrabold">Unique Crafting</h1>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-5xl mt-8">
        <div>
          <h2>About us</h2>
          <h2>Our Team</h2>
          <h2>Press</h2>
        </div>
        <div className="col-span-2 mb-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
            doloremque corrupti repellendus id totam magni, mollitia et earum
            necessitatibus cupiditate nobis voluptatem itaque minus ullam. Ad,
            eius corrupti voluptas quidem, facere sed commodi doloremque
            provident iste quia velit ex assumenda. Sed autem asperiores!
            Sapiente quos eos dignissimos possimus!
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
            doloremque corrupti repellendus id totam magni, mollitia et earum
            necessitatibus cupiditate nobis voluptatem itaque minus ullam. Ad,
            eius corrupti voluptas quidem, facere sed commodi doloremque
            provident iste quia velit ex assumenda. Sed autem asperiores a!
            Sapiente quos eos dignissimos possimus!
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-left font-medium text-xl">
          The Essence of Artistry
        </h1>
        <div className="flex items-center justify-between my-10">
          <span className="font-bold text-xl w-[150px]">
            Expert Artisan Craft
          </span>
          <p className="h-10 w-[1px] bg-gray-300 "></p>
          <span className="font-bold text-xl w-[150px]">
            Rich Cultural Heritage
          </span>
          <p className="h-10 w-[1px] bg-gray-300"></p>
          <span className="font-bold text-xl w-[200px]">
            Elegant Handmade Creations
          </span>
          <p className="h-10 w-[1px] bg-gray-300"></p>
          <span className="font-bold text-xl w-[200px]">
            Genuine Artisan Creations
          </span>
          <p className="h-10 w-[1px] bg-gray-300"></p>
          <span className="font-bold text-xl w-[200px]">
            Enduring Craft Traditions
          </span>
        </div>
      </div>
      <div className="py-10">
        <Image
          src="/pic.jpg"
          alt="Artisan image"
          width={800}
          height={400}
          objectFit="cover"
          className="w-full h-[400px]"
        />
      </div>
      <div className="flex items-start justify-between gap-10 border-b-[5px] border-black py-10">
        <div className="w-1/2 text-4xl font-extrabold">
          Discover Kashmiri handcrafted treasures, including Clothing, Crafted
          Goods, and the Kashmir Collection, blending artistry, tradition, and
          elegance.
        </div>
        <div className="w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          veritatis odio placeat! Voluptatum consequatur, in autem soluta
          maiores consequuntur dolores vitae recusandae. Molestiae mollitia
          inventore, pariatur sint adipisci nam debitis ut. Consequuntur
          explicabo fugit officiis illum ipsum fuga adipisci perspiciatis, quam
          commodi voluptas numquam ut sunt nam, qui minima ipsam necessitatibus
          nisi modi non voluptatibus nulla asperiores reprehenderit, facilis
          doloribus? Rem eaque fugit maiores odit commodi! Exercitationem
          sapiente, laborum dolor, eligendi eveniet eaque maxime delectus
          repellendus nostrum ipsa laboriosam iusto!
        </div>
      </div>
    </div>
  );
}

export default AboutRoute;
