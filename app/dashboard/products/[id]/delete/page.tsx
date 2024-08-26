import { deleteProduct } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteRoute({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this product?</CardTitle>
          <CardDescription>
            This is an irreverseble action. All the data related to this product
            will be deleted.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex items-center justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={params.id} />
            <SubmitButton variant="destructive" text="Delete Product" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
