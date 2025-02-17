
import { Layout } from "@/components/dashboard/Layout";
import { ReportsSection } from "@/components/dashboard/ReportsSection";

export default function ReportsPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Financial Reports</h1>
          <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ReportsSection />
        </div>
      </div>
    </Layout>
  );
}
