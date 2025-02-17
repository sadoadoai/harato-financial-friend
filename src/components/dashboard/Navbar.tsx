
import { Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  return (
    <nav className="bg-accent shadow-md">
      <div className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={onMenuClick}>
              <Menu className="h-6 w-6" />
            </Button>
            <span className="ml-4 text-xl font-semibold">Harato Financial</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
