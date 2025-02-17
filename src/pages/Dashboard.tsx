
import { Layout } from "@/components/dashboard/Layout";
import { Overview } from "@/components/dashboard/Overview";
import { BudgetSection } from "@/components/dashboard/BudgetSection";
import { InvestmentSection } from "@/components/dashboard/InvestmentSection";
import { GoalsSection } from "@/components/dashboard/GoalsSection";
import { AlertsSection } from "@/components/dashboard/AlertsSection";
import { ReportsSection } from "@/components/dashboard/ReportsSection";
import { EmergencySection } from "@/components/dashboard/EmergencySection";

export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Financial Dashboard</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <Overview />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BudgetSection />
          <InvestmentSection />
          <GoalsSection />
          <AlertsSection />
          <ReportsSection />
          <EmergencySection />
        </div>
      </div>
    </Layout>
  );
}
