
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const GoalsSection = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Financial Goals</CardTitle>
        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
          <Target className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">Goals in progress</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span>Overall Progress</span>
              <span className="text-primary">60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
