import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Cloud, 
  Leaf, 
  ShoppingBasket, 
  CalendarDays,
  FileText,
  Settings,
  Sprout
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", labelHi: "डैशबोर्ड", icon: LayoutDashboard },
  { path: "/weather", label: "Weather", labelHi: "मौसम", icon: Cloud },
  { path: "/crop-advisor", label: "Crop Advisor", labelHi: "फसल सलाहकार", icon: Leaf },
  { path: "/marketplace", label: "Marketplace", labelHi: "बाज़ार", icon: ShoppingBasket },
  { path: "/calendar", label: "Crop Calendar", labelHi: "फसल कैलेंडर", icon: CalendarDays },
  { path: "/schemes", label: "Schemes", labelHi: "योजनाएं", icon: FileText },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 hero-gradient flex-col z-50">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
          <Sprout className="w-7 h-7 text-accent-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary-foreground">KrushiMitra</h1>
          <p className="text-xs text-primary-foreground/70">कृषिमित्र</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${
                isActive 
                  ? "bg-accent text-accent-foreground font-medium" 
                  : "text-primary-foreground/80 hover:bg-sidebar-accent hover:text-primary-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-sm">{item.label}</span>
                <span className="text-[10px] opacity-70">{item.labelHi}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Settings at bottom */}
      <div className="p-4 border-t border-sidebar-border">
        <Link
          to="/settings"
          className="nav-item text-primary-foreground/80 hover:bg-sidebar-accent hover:text-primary-foreground"
        >
          <Settings className="w-5 h-5" />
          <span className="text-sm">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
