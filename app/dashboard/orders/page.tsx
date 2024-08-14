import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Orderspage() {
  return (
    <Card className="px-7">
      <CardTitle>Orders</CardTitle>
      <CardDescription>Recent Orders from your store</CardDescription>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-medium">Wajid Kashoo</p>
                <p className="hidden md:flex text-sm text-muted-foreground">
                  wkashoo@gmail.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>Sucessful</TableCell>
              <TableCell>2024-06-15</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
