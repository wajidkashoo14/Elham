import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface cardProps {
  item: {
    name: string;
    id: string;
    description: string;
    price: number;
    images: string[];
  };
}

export function ProductCard({ item }: cardProps) {
  return (
    <div className="rounded-lg">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {item.images.map((item, index) => (
            <CarouselItem>
              <div className="relative h-[330px]">
                <Image
                  src={item}
                  alt="Product Image"
                  fill
                  className="object-contain object-center w-full h-full rounded-lg "
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl ">{item.name}</h1>
        <h3 className="inline-flex items-center rounded-lg bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10">
          ${item.price}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {item.description}
      </p>
      <Button className="w-full mt-5" asChild>
        <Link href={`/product/${item.id}`}>Learn More!</Link>
      </Button>
    </div>
  );
}