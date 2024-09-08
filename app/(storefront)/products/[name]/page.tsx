import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function fetchData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
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
      const data = await prisma.product.findMany({
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
      const data = await prisma.product.findMany({
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

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  const { data, title } = await fetchData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
