import { deleteBanner } from "@/app/actions";
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

export default function DeleteBannerRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to delete this banner?</CardTitle>
          <CardDescription>Banner will be deleted permenantly</CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex items-center justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/banner">Cancel</Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={params.id} />
            <SubmitButton variant="destructive" text="Delete Banner" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
