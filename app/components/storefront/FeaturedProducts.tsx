import prisma from "@/app/lib/db";
import { ProductCard } from "./ProductCard";
import { unstable_noStore as noStore } from "next/cache";

async function fetchData() {
  const data = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      price: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return data;
}

export async function Featuredproducts() {
  noStore()
  const data = await fetchData();
  
  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Premium Selection
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
            Featured Items
          </h2>
          <div className="mt-4 w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((item, index) => (
            <div 
              key={item.id} 
              className="transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}