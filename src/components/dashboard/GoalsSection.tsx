
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

export const GoalsSection = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Financial Goals</CardTitle>
        <Button variant="ghost" size="icon">
          <Target className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">3/5</div>
        <p className="text-xs text-muted-foreground">
          Goals in progress
        </p>
      </CardContent>
    </Card>
  );
};
