import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Header from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/weather":
        return "Weather Intelligence";
      case "/crop-advisor":
        return "Crop Advisor";
      case "/marketplace":
        return "Marketplace";
      case "/calendar":
        return "Crop Calendar";
      case "/schemes":
        return "Government Schemes";
      default:
        return "KrushiMitra";
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header title={getPageTitle()} />
        
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6 animate-fade-in">
          {children}
        </main>
        
        {/* Mobile Bottom Navigation */}
        <MobileNav />
      </div>
    </div>
  );
};

export default AppLayout;
