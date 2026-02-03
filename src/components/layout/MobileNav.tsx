import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Cloud, 
  Leaf, 
  ShoppingBasket, 
  CalendarDays 
} from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: LayoutDashboard },
  { path: "/weather", label: "Weather", icon: Cloud },
  { path: "/crop-advisor", label: "Crops", icon: Leaf },
  { path: "/marketplace", label: "Market", icon: ShoppingBasket },
  { path: "/calendar", label: "Calendar", icon: CalendarDays },
];

const MobileNav = () => {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "animate-bounce-gentle" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
