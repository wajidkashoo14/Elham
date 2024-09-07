"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SliderProps {
  images: string[];
}
export function ImageSlider({ images }: SliderProps) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  function handlePreviousClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNextClick() {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleImageClick(index: number) {
    setMainImageIndex(index);
  }
  return (
    <div className="grid gap-6 md:gap-3 items-start">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          width={400}
          height={400}
          src={images[mainImageIndex]}
          alt="Product Image"
          className="object-cover h-[400px] w-[400px]"
        />

        <div className="absolute inset-0 flex justify-between items-center px-4">
          <Button onClick={handlePreviousClick} variant="ghost" size="icon">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button onClick={handleNextClick} variant="ghost" size="icon">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={cn(
              index === mainImageIndex
                ? "border-2 border-primary"
                : "border-gray-200",
              "relative overflow-hidden rounded-lg cursor-pointer"
            )}
          >
            <Image
              src={image}
              alt="Product Image"
              height={100}
              width={100}
              className="object-cover h-[100px] w-[100px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
