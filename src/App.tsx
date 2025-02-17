
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import BudgetPage from "./pages/BudgetPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import GoalsPage from "./pages/GoalsPage";
import AlertsPage from "./pages/AlertsPage";
import ReportsPage from "./pages/ReportsPage";
import EmergencyPage from "./pages/EmergencyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget" element={<BudgetPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
