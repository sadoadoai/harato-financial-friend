
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart } from "lucide-react";

export const InvestmentSection = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Investment Portfolio</CardTitle>
        <Button variant="ghost" size="icon">
          <PieChart className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$34,500</div>
        <p className="text-xs text-muted-foreground">
          Total investment value
        </p>
      </CardContent>
    </Card>
  );
};
