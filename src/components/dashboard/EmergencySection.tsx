
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export const EmergencySection = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Emergency Fund</CardTitle>
        <Button variant="ghost" size="icon">
          <Shield className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$12,000</div>
        <p className="text-xs text-muted-foreground">
          Emergency savings
        </p>
      </CardContent>
    </Card>
  );
};
