
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const AlertsSection = () => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-accent/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Financial Alerts</CardTitle>
        <Button variant="ghost" size="icon" className="hover:bg-primary/20">
          <Bell className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active alerts</p>
          </div>
          <div className="space-y-2">
            <div className="text-xs bg-accent/50 p-2 rounded-lg">
              <p className="font-medium">Unusual transaction detected</p>
              <p className="text-muted-foreground mt-1">Amazon.com - $299.99</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
