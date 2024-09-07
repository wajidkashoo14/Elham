import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function fetchData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = prisma.product.findMany({
        select: {
          id: true,
          name: true,
          images: true,
          price: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });
      return {
        title: "All Products",
        data: data,
      };
    }
    case "handicrafts": {
      const data = prisma.product.findMany({
        where: {
          status: "published",
          category: "handicrafts",
        },
        select: {
          id: true,
          name: true,
          images: true,
          price: true,
          description: true,
        },
      });
      return {
        title: "Products for Handicrafts",
        data: data,
      };
    }
    case "clothing": {
      const data = prisma.product.findMany({
        where: {
          status: "published",
          category: "cloths",
        },
        select: {
          id: true,
          name: true,
          images: true,
          price: true,
          description: true,
        },
      });

      return {
        title: "Products for Clothing",
        data: data,
      };
    }
    default: {
      notFound();
    }
  }
}

export default function CategoriesPage() {
  return <h1>i like autum</h1>;
}
