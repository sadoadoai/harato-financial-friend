
import { Home, PieChart, Wallet, Target, Bell, FileText, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Overview", href: "#overview" },
  { icon: Wallet, label: "Budget", href: "#budget" },
  { icon: PieChart, label: "Investments", href: "#investments" },
  { icon: Target, label: "Goals", href: "#goals" },
  { icon: Bell, label: "Alerts", href: "#alerts" },
  { icon: FileText, label: "Reports", href: "#reports" },
  { icon: Shield, label: "Emergency", href: "#emergency" },
];

export const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <aside
      className={cn(
        "h-screen bg-accent fixed left-0 top-0 z-40 w-64 transition-transform",
        !open && "-translate-x-full"
      )}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center p-2 text-base font-normal rounded-lg text-foreground hover:bg-primary/20"
              >
                <item.icon className="w-6 h-6" />
                <span className="ml-3">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
