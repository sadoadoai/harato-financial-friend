
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { name: "Jan", value: 4000, previous: 3000 },
  { name: "Feb", value: 3000, previous: 2800 },
  { name: "Mar", value: 2000, previous: 1800 },
  { name: "Apr", value: 2780, previous: 2500 },
  { name: "May", value: 1890, previous: 1700 },
  { name: "Jun", value: 2390, previous: 2100 },
];

export const Overview = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-accent/50">
      <CardHeader>
        <CardTitle className="text-lg">Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-3 mb-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
            <h3 className="text-2xl font-bold">$48,500</h3>
            <p className="text-xs text-muted-foreground mt-1">+12.5% from last month</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Monthly Income</p>
            <h3 className="text-2xl font-bold">$6,250</h3>
            <p className="text-xs text-muted-foreground mt-1">+5.2% from last month</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Monthly Expenses</p>
            <h3 className="text-2xl font-bold">$3,890</h3>
            <p className="text-xs text-muted-foreground mt-1">-2.3% from last month</p>
          </div>
        </div>
        <div className="h-[300px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8E1616" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8E1616" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1D1616',
                  border: '1px solid #8E1616',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#8E1616" 
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
