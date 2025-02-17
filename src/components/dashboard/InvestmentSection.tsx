
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart } from "lucide-react";

export const InvestmentSection = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Investment Portfolio</CardTitle>
        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
          <PieChart className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold">$34,500</div>
            <p className="text-xs text-muted-foreground">Total investment value</p>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-accent/50 p-2 rounded-lg">
              <div className="font-medium">Stocks</div>
              <div className="text-primary">+5.2%</div>
            </div>
            <div className="bg-accent/50 p-2 rounded-lg">
              <div className="font-medium">Crypto</div>
              <div className="text-destructive">-2.1%</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
