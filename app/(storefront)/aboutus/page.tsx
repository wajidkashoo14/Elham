import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function AboutRoute() {
  return (
    <div className="mt-8 px-4 lg:px-8">
      {/* Header */}
      <h1 className="uppercase text-4xl lg:text-5xl font-semibold py-10 text-center border-b-[5px] border-black border-t-[5px]">
        about us
      </h1>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 py-10">
        <div>
          <Image
            src="/img1.jpg"
            alt="product image"
            height={600}
            width={600}
            className="h-[300px] sm:h-[400px] lg:h-[600px] w-full lg:w-[600px] object-cover"
          />
        </div>
        <div className="text-center lg:text-right space-y-6 py-6">
          {[
            "Handmade Treasures",
            "Skilled Craftsmanship",
            "Timeless Beauty",
            "Masterful Creations",
            "Unique Crafting",
          ].map((text, index) => (
            <h1 key={index} className="text-3xl lg:text-5xl font-extrabold">
              {text}
            </h1>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
        <div className="text-center lg:text-left space-y-3">
          <h2 className="font-bold">About us</h2>
          <h2 className="font-bold">Our Team</h2>
          <h2 className="font-bold">Press</h2>
        </div>
        <div className="lg:col-span-2 space-y-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
            doloremque corrupti repellendus id totam magni, mollitia et earum
            necessitatibus cupiditate nobis voluptatem itaque minus ullam. Ad,
            eius corrupti voluptas quidem, facere sed commodi doloremque
            provident iste quia velit ex assumenda. Sed autem asperiores!
            Sapiente quos eos dignissimos possimus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
            doloremque corrupti repellendus id totam magni, mollitia et earum
            necessitatibus cupiditate nobis voluptatem itaque minus ullam. Ad,
            eius corrupti voluptas quidem, facere sed commodi doloremque
            provident iste quia velit ex assumenda. Sed autem asperiores a!
            Sapiente quos eos dignissimos possimus!
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-10">
        <h1 className="text-center lg:text-left font-medium text-2xl">
          The Essence of Artistry
        </h1>
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 my-10">
          {[
            "Expert Artisan Craft",
            "Rich Cultural Heritage",
            "Elegant Handmade Creations",
            "Genuine Artisan Creations",
            "Enduring Craft Traditions",
          ].map((text, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:text-left"
            >
              <span className="font-bold text-lg lg:text-xl w-[150px]">
                {text}
              </span>
              {index !== 4 && (
                <div className="h-10 w-[1px] bg-gray-300 hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Section */}
      <div className="py-10">
        <Image
          src="/pic.jpg"
          alt="Artisan image"
          width={800}
          height={400}
          className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
        />
      </div>

      {/* Fifth Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 border-b-[5px] border-black py-10">
        <div className="w-full lg:w-1/2 text-2xl lg:text-4xl font-extrabold text-center lg:text-left">
          Discover Kashmiri handcrafted treasures, including Clothing, Crafted
          Goods, and the Kashmir Collection, blending artistry, tradition, and
          elegance.
        </div>
        <div className="w-full lg:w-1/2 text-justify text-sm sm:text-base">
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
