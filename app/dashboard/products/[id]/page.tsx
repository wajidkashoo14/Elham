import prisma from "@/app/lib/db";
import EditForm from "../../../components/dashboard/EditForm";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function fetchData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { id: string };
}) {
  noStore()
  const data = await fetchData(params.id);
  return (
    <div>
      <EditForm data={data}/>
    </div>
  );
}
